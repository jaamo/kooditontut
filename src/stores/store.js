import { observable, computed, reaction } from 'mobx';
import parse from '../lib/parser.js';
import { challenges } from './challenges.js';

/**
 * Synchronous timeout function.
 */
const timeout = ms => new Promise(res => setTimeout(res, ms));

export default class Store {
    // Elf.
    @observable
    elf = { x: 5, y: 5, direction: 'up' };

    @observable
    cookies = [];

    @observable
    success = false;

    @observable
    currentView = 'calendar';

    // 0 = not available
    // 1 = free space
    // 2 obstacle
    @observable
    arena = [];

    @observable
    description = '';

    // Saved source codes.
    sources = {};

    // Passed days.
    passedChallenges = [];

    // Selected day.
    selectedDay = 0;

    // Default source code.
    defaultSource = '';

    @observable
    failure = false;

    @observable
    failureMessage = '';

    // RRRIGHT NOW!
    @observable
    currentDate = new Date();

    constructor() {
        // Load passed challenges from local storage.
        const passedChallenges = window.localStorage.getItem(
            'passedChallenges'
        );
        if (passedChallenges) {
            this.passedChallenges = passedChallenges;
        }
        try {
            // Load save source from local storage
            const sourcesData = window.localStorage.getItem('sources');
            const sources = JSON.parse(sourcesData);
            if (sources) {
                this.sources = sources;
            }
        } catch (e) {
            console.log(e);
        }
    }

    changeView(view) {
        this.success = false;
        this.failure = false;
        this.currentView = view;
    }

    setChallengePassed(day) {
        if (this.passedChallenges.indexOf(day) == -1) {
            this.passedChallenges.push(day);
            window.localStorage.setItem(
                'passedChallenges',
                this.passedChallenges
            );
        }
    }

    isChallegePassed(day) {
        return this.passedChallenges.indexOf(day) != -1;
    }

    setSource(day, source) {
        this.sources[day] = source;
        window.localStorage.setItem('sources', JSON.stringify(this.sources));
    }

    getSource(day) {
        console.log(this.sources);
        return this.sources[day] ? this.sources[day] : false;
    }

    setFailure(message) {
        this.failure = true;
        this.failureMessage = message;
    }

    pickDate(date) {
        this.selectedDay = date;
        this.cookies = challenges[date].cookies;
        this.arena = challenges[date].arena;
        this.defaultSource = challenges[date].defaultSource;
        this.description = challenges[date].description;
        this.resetGame();
        this.changeView('challenge');
    }

    resetGame() {
        this.success = false;
        this.failure = false;
        this.elf.x = challenges[this.selectedDay].elf.x;
        this.elf.y = challenges[this.selectedDay].elf.y;
        this.elf.direction = challenges[this.selectedDay].elf.direction;
    }

    /**
     * Synchronously execute all commands in command tree.
     */
    async execute(tree, level = 0) {
        this.resetGame();
        for (let line of tree) {
            console.log(level + ' ' + line.command);
            this.runCommand(line.command);
            this.checkArena();
            this.checkCookie();
            if (this.success || this.failure) {
                return;
            }
            if (line.tree.length > 0) {
                await this.execute(line.tree, level + 1);
            }
            await timeout(1000);
        }
    }

    /**
     * Run command.
     */
    runCommand(command) {
        switch (command) {
            case 'up':
            case 'down':
            case 'left':
            case 'right':
                this.elf.direction = command;
                break;
            case 'move':
                this.move();
                break;
            default:
                this.setFailure('Tuntematon komento: ' + command);
                this.failure = true;
                break;
        }
    }

    /**
     * Check if player is on cookie.
     */
    checkCookie() {
        // Elf is on cookie!
        if (
            this.cookies.length > 0 &&
            this.cookies[0].x == this.elf.x &&
            this.cookies[0].y == this.elf.y
        ) {
            this.cookies.shift();

            // All cookies found!
            if (this.cookies.length == 0) {
                this.setChallengePassed(this.selectedDay);
                this.success = true;
            }
        }
    }

    /**
     * Check if elf is still inside arena.
     */
    checkArena() {
        if (this.arena[this.elf.y][this.elf.x] != 1) {
            this.setFailure('Oho! Astuit ulos alueelta!');
        }
    }

    /**
     * Parse repeat count from command.
     */
    getRepeats(command) {
        if (command.indexOf('repeat ')) {
            return parseInt(
                command.replace('repeat ', '').replace(' times', '')
            );
        }
    }

    /**
     * Move elf.
     */
    move() {
        switch (this.elf.direction) {
            case 'up':
                this.elf.y--;
                break;
            case 'down':
                this.elf.y++;
                break;
            case 'left':
                this.elf.x--;
                break;
            case 'right':
                this.elf.x++;
                break;
        }
    }
}
