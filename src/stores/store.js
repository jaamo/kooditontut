import { observable, computed, reaction } from 'mobx';
import {
    GAME_STATUS_IDLE,
    GAME_STATUS_RUNNING,
    GAME_STATUS_SUCCESS,
    GAME_STATUS_FAILURE
} from '../constants/gamestatus.js';

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
    gameStatus = GAME_STATUS_IDLE;

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
    @observable
    source = '';

    @observable
    failureMessage = '';

    // Function to verify source code.
    checkSource = () => true;

    // RRRIGHT NOW!
    @observable
    currentDate = new Date();

    constructor() {
        // Load data from local storage.
        try {
            // Load passed challenges from local storage.
            const passedChallengesData = window.localStorage.getItem(
                'passedChallenges'
            );
            const passedChallenges = JSON.parse(passedChallengesData);
            if (passedChallenges && Array.isArray(passedChallenges)) {
                this.passedChallenges = passedChallenges;
            } else {
                this.passedChallenges = [];
            }
        } catch (e) {
            this.passedChallenges = [];
            console.log(e);
        }
        try {
            // Load save source from local storage
            const sourcesData = window.localStorage.getItem('sources');
            const sources = JSON.parse(sourcesData);
            if (sources && typeof sources == 'object') {
                this.sources = sources;
            } else {
                this.sources = {};
            }
        } catch (e) {
            this.sources = {};
            console.log(e);
        }

        // Debug. Enable all dates.
        if (window.location.toString().indexOf('debug') !== -1) {
            this.currentDate = new Date(2019, 1, 1);
        }
    }

    /**
     * Change between two main views.
     */
    changeView(view) {
        this.gameStatus = GAME_STATUS_IDLE;
        this.currentView = view;
    }

    /**
     * Add given day to passed challenges list. Update also to local storage.
     */
    setChallengePassed(day) {
        if (this.passedChallenges.indexOf(day) == -1) {
            this.passedChallenges.push(day);
            window.localStorage.setItem(
                'passedChallenges',
                JSON.stringify(this.passedChallenges)
            );
        }
    }

    /**
     * Test if given day is passed.
     */
    isChallegePassed(day) {
        return this.passedChallenges.indexOf(day) != -1;
    }

    /**
     * Save source to local storage.
     */
    setSource(day, source) {
        this.sources[day] = source;
        window.localStorage.setItem('sources', JSON.stringify(this.sources));
    }

    /**
     * Get source for given day.
     */
    getSource(day) {
        return this.sources[day] ? this.sources[day] : false;
    }

    /**
     * Set application to failed state.
     */
    setFailure(message) {
        this.gameStatus = GAME_STATUS_FAILURE;
        this.failureMessage = message;
    }

    /**
     * Activate give date.
     */
    pickDate(date) {
        this.selectedDay = date;
        this.cookies = challenges[date].cookies;
        this.arena = challenges[date].arena;
        this.source = this.getSource(date) || challenges[date].defaultSource;
        this.description = challenges[date].description;
        this.checkSource = challenges[date].checkSource;
        this.resetGame();
        this.changeView('challenge');
    }

    resetGame() {
        this.gameStatus = GAME_STATUS_IDLE;
        this.cookies = challenges[this.selectedDay].cookies;
        this.elf.x = challenges[this.selectedDay].elf.x;
        this.elf.y = challenges[this.selectedDay].elf.y;
        this.elf.direction = challenges[this.selectedDay].elf.direction;
    }

    play(gameStates) {
        //debugger;
        this.consumeStateBuffer(gameStates);
    }

    /**
     * Recursively consume gameStates buffer.
     */
    consumeStateBuffer(gameStates) {
        console.log(new Date() + ' consume');

        // Out of states. End of game.
        if (gameStates.length == 0) {
            return;
        }

        // Get current state.
        const gameState = gameStates.shift();

        // Move elf.
        this.elf = gameState.elf;
        this.gameStatus = gameState.gameStatus;
        this.cookies = gameState.cookies;
        this.arena = gameState.arena;
        this.failureMessage = gameState.failureMessage;

        // Success!
        if (this.gameStatus == GAME_STATUS_SUCCESS) {
            this.setChallengePassed(this.selectedDay);
            return;
        }

        setTimeout(() => this.play(gameStates), 500);
    }
}
