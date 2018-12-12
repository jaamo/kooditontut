import {
    GAME_STATUS_IDLE,
    GAME_STATUS_RUNNING,
    GAME_STATUS_SUCCESS,
    GAME_STATUS_FAILURE
} from '../constants/gamestatus.js';

// Game state.
const state = {
    elf: {},
    cookies: [],
    gameStatus: GAME_STATUS_IDLE,
    arena: [],
    failureMessage: ''
};

// List of all game states.
let gameStates = [];

// Tickfunction. This is run in the beginning of every iteration.
let tickFunction = (arena, tick) => {};

// Iteration counter.
let tick = 0;

/**
 * Reset game and execute!
 */
export default function execute(tree, elf, cookies, arena, newTickFunction) {
    // Deep clone game state.
    state.elf = JSON.parse(JSON.stringify(elf));
    state.cookies = JSON.parse(JSON.stringify(cookies));
    state.arena = JSON.parse(JSON.stringify(arena));
    state.gameStatus = GAME_STATUS_RUNNING;
    tick = 0;
    gameStates = [];

    // Save tick function.
    if (typeof newTickFunction == 'function') {
        tickFunction = newTickFunction;
    } else {
        tickFunction = (arena, tick) => {};
    }

    // Save initial state.
    saveState();

    // Start calculation.
    executeTree(tree, 0);

    // Check if we have cookies left.
    if (state.gameStatus != GAME_STATUS_FAILURE && state.cookies.length > 0) {
        state.gameStatus = GAME_STATUS_FAILURE;
        setFailure('Uups, tonttu ei päässyt piparin luo!');
        saveState();
    }

    return gameStates;
}

/**
 * Synchronously execute all commands in command tree.
 */
function executeTree(tree, level = 0) {
    // Iterate all lines in tree.
    for (let line of tree) {
        console.log(new Date() + ': ' + line.command, line.args);

        // Skip tree if game is over.
        if (
            state.gameStatus == GAME_STATUS_SUCCESS ||
            state.gameStatus == GAME_STATUS_FAILURE
        ) {
            saveState();
            return false;
        }

        initTick();

        // Run command.
        runCommand(line.command);

        // Check if elf is still in arena.
        checkArena();

        // Check of elf in on cookie.
        checkCookie();

        // Check if the game is still on.
        /*if (
            state.gameStatus == GAME_STATUS_SUCCESS ||
            state.gameStatus == GAME_STATUS_FAILURE
        ) {
            saveState();
            return;
        }*/

        // Execute repeat command.
        if (
            line.command == 'repeat' &&
            line.tree.length > 0 &&
            line.args.iterations
        ) {
            for (let i = 0; i < line.args.iterations; i++) {
                if (!executeTree(line.tree, level + 1)) {
                    return false;
                }
            }
        }

        // Execute if-command.
        else if (line.command == 'if') {
            if (line.args.condition == 'can move') {
                if (canMove()) {
                    executeTree(line.tree, level + 1);
                } else {
                    saveState();
                }
            } else {
                setFailure(
                    'Tuntematon komento: ' +
                        line.command +
                        ' ' +
                        line.args.condition
                );
            }
        } else {
            // Save game state.
            saveState();
        }
    }

    return true;
}

/**
 * Execute this function on each tick.
 */
function initTick() {
    tickFunction(state.arena, tick);
    console.log('Tick ' + tick);
    tick++;
}

/**
 * Save current state to state history.
 */
function saveState() {
    const newState = JSON.parse(JSON.stringify(state));
    //console.log(newState);
    gameStates.push(newState);
}

/**
 * Mark game as failed.
 */
function setFailure(message) {
    state.gameStatus = GAME_STATUS_FAILURE;
    state.failureMessage = message;
}

/**
 * Run command.
 */
function runCommand(command) {
    switch (command) {
        case 'up':
        case 'down':
        case 'left':
        case 'right':
            state.elf.direction = command;
            break;
        case 'move':
            move();
            break;
        case 'repeat':
            break;
        case 'if':
            break;
        default:
            setFailure('Tuntematon komento: ' + command);
            state.gameStatus = GAME_STATUS_FAILURE;
            break;
    }
}

/**
 * Check if player is on cookie.
 */
function checkCookie() {
    // Elf is on cookie!
    if (
        state.cookies.length > 0 &&
        state.cookies[0].x == state.elf.x &&
        state.cookies[0].y == state.elf.y
    ) {
        state.cookies.shift();

        // All cookies found!
        if (state.cookies.length == 0) {
            state.gameStatus = GAME_STATUS_SUCCESS;
        }
    }
}

/**
 * Check if elf is still inside arena.
 */
function checkArena() {
    if (state.arena[state.elf.y][state.elf.x] != 1) {
        setFailure('Oho! Astuit ulos alueelta!');
    }
}

/**
 * Move elf.
 */
function move() {
    switch (state.elf.direction) {
        case 'up':
            state.elf.y--;
            break;
        case 'down':
            state.elf.y++;
            break;
        case 'left':
            state.elf.x--;
            break;
        case 'right':
            state.elf.x++;
            break;
    }
}

/**
 * Return true if elf can move to given direction.
 */
function canMove() {
    let newX = state.elf.x;
    let newY = state.elf.y;
    switch (state.elf.direction) {
        case 'up':
            newY--;
            break;
        case 'down':
            newY++;
            break;
        case 'left':
            newX--;
            break;
        case 'right':
            newX++;
            break;
    }

    return state.arena[newY][newX] == 1;
}
