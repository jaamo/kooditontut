import { observable, computed, reaction } from 'mobx';
import parse from '../lib/parser.js';

// Timeout function.
const timeout = ms => new Promise(res => setTimeout(res, ms));

export default class Store {
    @observable
    title = 'kala';
    @observable
    sourceTree = [];
    @observable
    elf = { x: 0, y: 0, direction: 'up' };

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
