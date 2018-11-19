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
    elf = { x: 0, y: 0 };
    run(src) {
        this.sourceTree = parse(src);
        console.log(this.sourceTree);
    }

    moveElfRight() {
        this.elf.x++;
    }

    async moi() {
        console.log('moi 1');
        await timeout(5000);
        console.log('moi 2');
    }
}
