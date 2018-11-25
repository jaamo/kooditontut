import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import Challenge from '../components/Challenge.js';
import Cell from '../components/Cell.js';
import Elf from '../components/Elf.js';
import Cookie from '../components/Cookie.js';
import Modal from '../components/Modal.js';
import { STYLE_CELL_WIDTH } from '../constants/styles.js';

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
    font-family: 'Mountains of Christmas', cursive;
    color: #FFEFB9;
    font-size: 2rem;
}
h1 {
    font-weight: 700;
}
`;

const Grid = styled.div`
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    align-items: stretch;
`;

const GridColumn = styled.div`
    flex-grow: 1;
    width: 50%;
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

@observer
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            angles: []
        };
    }

    componentDidMount() {}

    render() {
        const { store } = this.props;
        return (
            <Grid>
                <GlobalStyle />
                {store.success && <Modal />}
                <GridColumn>
                    <Challenge store={store} />
                </GridColumn>
                <GridColumn>
                    <Map>
                        {store.arena.map((row, y) =>
                            row.map((cell, x) => (
                                <Cell
                                    key={x + '-' + y}
                                    paska="red"
                                    type={cell}
                                    x={x}
                                    y={y}
                                    angle={0}
                                />
                            ))
                        )}
                        <Elf elf={store.elf} x={store.elf.x} y={store.elf.y} />
                        {store.cookies.map((cookie, i) => (
                            <Cookie key={i} x={cookie.x} y={cookie.y} />
                        ))}
                    </Map>
                </GridColumn>
            </Grid>
        );
    }
}

export default Game;
