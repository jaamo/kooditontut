import React from 'react';
import { observer } from 'mobx-react';
import parse from '../lib/parser.js';
import execute from '../lib/gamecalc.js';
import styled from 'styled-components';
import Button from './Button.js';
import {
    GAME_STATUS_IDLE,
    GAME_STATUS_RUNNING,
    GAME_STATUS_SUCCESS,
    GAME_STATUS_FAILURE
} from '../constants/gamestatus.js';

const StyledChallenge = styled.div`
    position: relative;
    background: #ffefb9;
    color: #34502b;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    transform: rotate(${-2 + Math.random() * 4}deg);
    padding: 2rem;
    color: black;
    box-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.8);
    textarea {
        font-family: 'Share Tech Mono', monospace;
        width: 30rem;
        height: 20rem;
        display: block;
        border: 0;
        background: #fcf7e6;
        padding: 1rem;
        font-size: 2rem;
    }
`;

const Title = styled.h1`
    position: absolute;
    margin: 0;
    padding: 1rem 2rem;
    top: -5rem;
    background: #ffd441;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    box-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.8);
    transform: rotate(${-10 + Math.random() * 20}deg);
    width: 15rem;
`;

const Description = styled.div`
    font-size: 1.6rem;
    .code {
        font-family: 'Share Tech Mono', monospace;
        padding-left: 1rem;
        font-size: 1.6rem;
    }
`;

@observer
class Challenge extends React.Component {
    constructor(props) {
        super(props);
        this.sourceRef = React.createRef();
        this.state = {
            showInfo: true,
            source: '',
            previousSource: ''
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.previousSource !== nextProps.store.source) {
            prevState.source = nextProps.store.source;
            prevState.previousSource = nextProps.store.source;
        }
        return prevState;
    }

    componentDidMount() {
        this.setState({ source: this.props.store.source });
    }

    handleSourceChange(event) {
        this.setState({ source: event.target.value });
    }

    runProgram() {
        const { store } = this.props;

        // Get source.
        const preRunError = store.checkSource(this.state.source);

        if (preRunError !== false) {
            store.setFailure(preRunError);
            return;
        }

        // Save source.
        store.setSource(store.selectedDay, this.state.source);

        // Reset game.
        store.resetGame();

        // Parse source.
        const tree = parse(this.state.source);

        // Execute source.
        const gameStates = execute(
            tree,
            store.elf,
            store.cookies,
            store.arena,
            store.tickFunction
        );

        this.props.store.play(gameStates);
    }

    render() {
        const { store } = this.props;
        return (
            <StyledChallenge>
                {this.state.showInfo && (
                    <div>
                        <Title>{store.selectedDay}. päivä</Title>
                        <Description
                            dangerouslySetInnerHTML={{
                                __html: store.description
                            }}
                        />
                        <Button
                            onClick={() => this.setState({ showInfo: false })}
                        >
                            Koodaamaan!
                        </Button>
                    </div>
                )}
                {!this.state.showInfo && (
                    <div>
                        <textarea
                            /*ref={this.sourceRef}*/
                            onChange={e => this.handleSourceChange(e)}
                            value={this.state.source}
                        />
                        {store.gameStatus != GAME_STATUS_RUNNING && (
                            <Button
                                onClick={() =>
                                    this.setState({ showInfo: true })
                                }
                            >
                                Ohjeeseen
                            </Button>
                        )}
                        {store.gameStatus != GAME_STATUS_RUNNING && (
                            <Button onClick={() => this.runProgram()}>
                                Käynnistä!
                            </Button>
                        )}
                    </div>
                )}
            </StyledChallenge>
        );
    }
}

export default Challenge;
