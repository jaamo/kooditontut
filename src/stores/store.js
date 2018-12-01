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

    // Current day.
    currentDay = 0;

    // Default source code.
    defaultSource = '';

    constructor() {}

    changeView(view) {
        this.success = false;
        this.currentView = view;
    }

    pickDate(date) {
        this.currentDay = date;
        this.elf = challenges[date].elf;
        this.cookies = challenges[date].cookies;
        this.arena = challenges[date].arena;
        this.defaultSource = challenges[date].defaultSource;
        this.description = challenges[date].description;
        this.changeView('challenge');
    }

    /**
     * Synchronously execute all commands in command tree.
     */
    async execute(tree, level = 0) {
        this.success = false;
        for (let line of tree) {
            console.log(level + ' ' + line.command);
            this.runCommand(line.command);
            this.checkCookie();
            if (this.success) {
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
            console.log('PISTE');
            this.cookies.shift();

            // All cookies found!
            if (this.cookies.length == 0) {
                this.passedChallenges.push(this.currentDay);
                this.success = true;
            }
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
