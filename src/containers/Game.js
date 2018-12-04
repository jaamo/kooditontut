import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import Challenge from '../components/Challenge.js';
import Cell from '../components/Cell.js';
import Elf from '../components/Elf.js';
import Cookie from '../components/Cookie.js';
import Calendar from '../components/Calendar.js';
import BackButton from '../components/BackButton.js';
import Modal from '../components/Modal.js';
import { STYLE_CELL_WIDTH } from '../constants/styles.js';
import {
    GAME_STATUS_IDLE,
    GAME_STATUS_RUNNING,
    GAME_STATUS_SUCCESS,
    GAME_STATUS_FAILURE
} from '../constants/gamestatus.js';

// https://www.colourlovers.com/palette/130451/Tis_the_Season
// #941F1F red
// #CE6B5D light red
// #FFEFB9 light yellow
// #7B9971 light green
// #34502B green

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
        background: #34502B;
        background-image: url(/img/bg.svg);
        background-size: 15rem 15rem;
    font-family: 'Mountains of Christmas', cursive;
    color: #FFEFB9;
    font-size: 2rem;

}
h1 {
    font-weight: 700;
}
`;

const Container = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
`;

const Grid = styled.div`
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 200%;
    align-items: stretch;
    transition: left 1s cubic-bezier(0.28, 0.96, 0.17, 1);
`;

const GridColumn = styled.div`
    flex-grow: 1;
    width: 25%;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Map = styled.div`
    width: calc(11 * ${STYLE_CELL_WIDTH}rem);
    height: calc(11 * 4rem);
    position: relative;
`;
const Decorations = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    overflow: hidden;
`;
const Decoration = styled.div`
    pointer-events: none;
    position: absolute;
    left: ${props => props.left};
    right: ${props => props.right};
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    z-index: 1000;
    img {
        width: ${props => props.width};
    }
`;
const H1 = styled.h1`
    font-weight: 700;
    color: #d41c1c;
    text-shadow: 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.5);
`;

@observer
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            angles: []
        };
    }

    changeView(view) {
        this.props.store.changeView(view);
    }

    componentDidMount() {}

    render() {
        const { store } = this.props;
        return (
            <div>
                <Decorations>
                    <Decoration left="-1rem" top="20%" width="4rem">
                        <img src="/img/cookiedude.svg" />
                    </Decoration>
                    <Decoration right="-3rem" top="80%" width="8rem">
                        <img src="/img/present.svg" />
                    </Decoration>
                    <Decoration left="40%" top="-1rem" width="4rem">
                        <img src="/img/treedecoration.svg" />
                    </Decoration>
                    <Decoration left="60%" bottom="-4rem" width="4rem">
                        <img src="/img/candle.svg" />
                    </Decoration>
                </Decorations>
                {store.gameStatus == GAME_STATUS_SUCCESS && (
                    <Modal
                        message="WOW! Sait kerättyä kaikki piparit!"
                        type="success"
                        onClick={() => this.changeView('calendar')}
                    />
                )}
                {store.gameStatus == GAME_STATUS_FAILURE && (
                    <Modal
                        message={store.failureMessage}
                        type="error"
                        onClick={() => store.resetGame()}
                    />
                )}
                <Container>
                    <Grid
                        style={{
                            left:
                                store.currentView == 'calendar' ? '0' : '-100%'
                        }}
                    >
                        <GlobalStyle />
                        <GridColumn>
                            <div>
                                <H1>Tonttu Bittiparran joulukalenteri</H1>
                                <p>
                                    Apua! Tonttu Bittiparta on jäänyt jumiin
                                    tietokoneen uumeniin! Sinun tehtäväsi on
                                    koodata ohjelma, joka auttaa tontun piparin
                                    luo. Kun kaikki piparit ovat löytyneet,
                                    tonttu vapautuu koneen syövereistä.
                                </p>
                                <p>Aloita valitsemalla päivä kalenterista.</p>
                            </div>
                        </GridColumn>
                        <GridColumn>
                            <Calendar
                                pickDate={date => store.pickDate(date)}
                                isChallegePassed={day =>
                                    store.isChallegePassed(day)
                                }
                                currentDate={store.currentDate}
                            />
                        </GridColumn>
                        <GridColumn>
                            <Challenge store={store} />
                        </GridColumn>
                        {!store.running && (
                            <BackButton
                                onClick={e => this.changeView('calendar')}
                            />
                        )}
                        <GridColumn>
                            <Map>
                                {store.arena.map((row, y) =>
                                    row.map((cell, x) => (
                                        <Cell
                                            key={x + '-' + y}
                                            type={cell}
                                            x={x}
                                            y={y}
                                            angle={0}
                                        />
                                    ))
                                )}
                                <Elf
                                    elf={store.elf}
                                    x={store.elf.x}
                                    y={store.elf.y}
                                    direction={store.elf.direction}
                                />
                                {store.cookies.map((cookie, i) => (
                                    <Cookie key={i} x={cookie.x} y={cookie.y} />
                                ))}
                            </Map>
                        </GridColumn>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Game;
