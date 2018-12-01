export const challenges = {
    '1': {
        description: `
            <p>
                Ensimmäinen päivä on helppo. Oikealla näet tontun loukussa tietokoneen sisällä. Voit ohjailla tonttua kirjoittamalla komentoja peräkkäin. Tavoitteena on päästä piparin luokse. Tämän päivän harjoituksessa tonttu pääsee piparin luo seuraavilla komennoilla:
            </p>
            <p class="code">
                up
                <br />
                move
        <br />
        move
            </p>
            <p>
                Klikkaa Koodaamaan! -nappia ja kokeile käynnistää ohjelma.
            </p>`,

        cookies: [{ x: 5, y: 3 }],

        defaultSource: `up
move
move`,

        elf: { x: 5, y: 5, direction: 'up' },

        arena: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    }
};
