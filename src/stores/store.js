import { observable, computed, reaction } from 'mobx';
import parse from '../lib/parser.js';

/**
 * Synchronous timeout function.
 */
const timeout = ms => new Promise(res => setTimeout(res, ms));

export default class Store {
    // Elf.
    @observable
    elf = { x: 5, y: 5, direction: 'up' };

    // 0 = not available
    // 1 = free space
    // 2 obstacle
    @observable
    arena = [
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    /**
     * Synchronously execute all commands in command tree.
     */
    async execute(tree, level = 0) {
        for (let line of tree) {
            console.log(level + ' ' + line.command);
            this.runCommand(line.command);
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
