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

        checkSource: source => false,

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
    },
    '2': {
        description: `
            <p>
                Voit käyttää tontun kääntämiseen komentoja up, right, down ja left. Liikuta tonttua rataa pitkin piparin luokse!            </p>

            `,

        cookies: [{ x: 2, y: 2 }],

        checkSource: source => false,

        defaultSource: `up
move
move`,

        elf: { x: 5, y: 5, direction: 'up' },

        arena: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    },
    '3': {
        description: `
            <p>
              No jopas, päivän reitti onkin aika monimutkainen! Saatko autettua Bittiparran ulos up, right, down, left ja move -komennoilla?
            </p>
        `,

        cookies: [{ x: 8, y: 2 }],

        checkSource: source => false,

        defaultSource: ``,

        elf: { x: 5, y: 9, direction: 'up' },

        arena: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    },
    '4': {
        description: `
            <p>
                No huhhuh! Nyt on melkoiseen soiroon tonttu-parka itsensä ajanut! Osaatko auttaa?
            </p>
        `,

        cookies: [{ x: 7, y: 3 }],

        defaultSource: ``,

        elf: { x: 5, y: 5, direction: 'up' },

        checkSource: source => false,

        arena: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    },
    '5': {
        description: `
            <p>
                Mjahans. Pipareita voi näemmä olla useita?! Tänään voit päättää reitin itse.
            </p>
        `,

        cookies: [{ x: 1, y: 1 }, { x: 6, y: 3 }, { x: 9, y: 8 }],

        defaultSource: ``,

        elf: { x: 2, y: 8, direction: 'up' },

        checkSource: source => false,

        arena: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    },
    '6': {
        description: `
            <p>
        Tänään opitaan ihan uusi juttu! Nimittäin koodin toistaminen. Jos kirjoitat repeat 5 ja sen jälkeen seuraavalle riville komennon, toistetaan haluamasi komento viisi kertaa. Esimerkiksi näin:
        </p>

            <p class="code">
                repeat 2
                <br />
        &nbsp;&nbsp;move
        </p>
        <p>
        Repeat-komennon jälkeisten komentojen alkuun pitää laittaa kaksi tyhjää, jotta hommat pelittää. Yritä muokata esimerkkikoodia niin, että tonttu saa piparin.
        </p>
        `,

        cookies: [{ x: 5, y: 1 }],

        checkSource: source => {
            if (!source.match(/repeat/)) {
                return 'Muista käyttää repeat-komentoa!';
            } else {
                return false;
            }
        },

        defaultSource: `repeat 2
  move
`,

        elf: { x: 5, y: 5, direction: 'up' },

        arena: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
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
