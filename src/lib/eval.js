import CoffeeScript from 'coffeescript';

export default function run() {
    const areaWidth = 40;
    const areaHeight = 20;
    const gameStates = [];
    const gameState = {
        elf: {
            x: 0,
            y: 0
        }
    };

    function sano(msg) {
        console.log(msg);
    }

    function log(msg) {
        console.log(msg);
    }

    function liikuylos() {
        if (gameState.elf.y == 0) {
            log('En voi liikkua ylöspäin.');
            return false;
        }
        gameState.elf.y--;
        console.log('Liikuin ylöspäin.');
        return true;
    }

    eval(
        CoffeeScript.compile(`
        liikuylos()
    `)
    );
}
