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
    },
    '7': {
        description: `
            <p>
            Jatkahan repeat-komennolla touhuamista. Tällä kertaa vähän pidempi reitti.
            </p>
        `,

        cookies: [{ x: 3, y: 9 }],

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
            [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    },
    '8': {
        description: `
            <p>
            Repeat-komento voi sisältää useita alakomentoja. Vähän niinkuin näin:
            </p>
            <p class="code">
                repeat 2
                <br />
                &nbsp;&nbsp;move
                <br />
                &nbsp;&nbsp;right
            </p>
            <p>
            Muista vaan lisätä nuo kaksi tyhjää rivina alkuun!
            </p>
        `,

        cookies: [{ x: 7, y: 3 }],

        checkSource: source => {
            const matches = source.match(/repeat/g);
            if (matches && matches.length == 1) {
                return false;
            } else {
                return 'Heeei, käytä yhtä repeat-komentoa!';
            }
        },

        defaultSource: ``,

        elf: { x: 3, y: 7, direction: 'up' },

        arena: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    },
    '9': {
        description: `
            <p>
            Otetaas tänään vähän iisimmin. Ratkaise miten haluat!
            </p>
        `,

        cookies: [{ x: 5, y: 5 }, { x: 9, y: 1 }],

        checkSource: source => {
            return false;
        },

        defaultSource: ``,

        elf: { x: 1, y: 9, direction: 'up' },

        arena: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    },

    '10': {
        description: `
            <p>
            Koitappas ratkaista tämä viidellä rivillä koodia.
            </p>
        `,

        cookies: [{ x: 9, y: 1 }],

        checkSource: source => {
            const rows = source.match(/\n/g);
            return rows.length < 6
                ? false
                : 'Heeeei! Tämä on tehtävissä viidellä rivillä. Koitappa uudestaan.';
        },

        defaultSource: ``,

        elf: { x: 1, y: 9, direction: 'up' },

        arena: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    },

    '11': {
        description: `
            <p>
            Noo tämmönen iisimpi silmukka tällä kertaa. Käytä repeattia.
            </p>
        `,

        cookies: [{ x: 9, y: 1 }],

        checkSource: source => {
            const matches = source.match(/repeat/g);
            if (matches && matches.length > 0) {
                return false;
            } else {
                return 'Nonii. Sovittiin, että käytetään repeat-komentoa!';
            }
        },

        defaultSource: ``,

        elf: { x: 1, y: 9, direction: 'up' },

        arena: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    },

    '12': {
        description: `
            <p>
            Noo tämmönen iisimpi silmukka tällä kertaa. Käytä repeattia.
            </p>
        `,

        cookies: [{ x: 5, y: 2 }],

        checkSource: source => {
            const matches = source.match(/if/g);
            if (matches && matches.length == 1) {
                return false;
            } else {
                return 'Käytä sitä if-komentoa!';
            }
        },

        tickFunction: (arena, tick) => {
            console.log('Tickfunction ' + tick);
            if (tick % 2 == 0) {
                arena[5][5] = 0;
            } else {
                arena[5][5] = 1;
            }
        },

        defaultSource: ``,

        elf: { x: 5, y: 8, direction: 'up' },

        arena: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    }
};
