import React from 'react';
import { observer } from 'mobx-react';
import parse from '../lib/parser.js';
import styled from 'styled-components';
import Button from './Button.js';

const StyledChallenge = styled.div`
    position: relative;
    background: #ffefb9;
    color: #34502b;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    transform: rotate(${-2 + Math.random() * 4}deg);
    padding: 2rem;
    color: black;
    box-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.8);
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
`;

const CodeSample = styled.div`
    font-family: 'Share Tech Mono', monospace;
    padding-left: 1rem;
    font-size: 1.6rem;
`;

const CodeArea = styled.textarea`
    font-family: 'Share Tech Mono', monospace;
    width: 40rem;
    height: 20rem;
    display: block;
    border: 0;
    background: #fcf7e6;
    padding: 1rem;
    font-size: 2rem;
`;

@observer
class Challenge extends React.Component {
    constructor(props) {
        super(props);
        this.sourceRef = React.createRef();
        this.state = {
            showInfo: true
        };
    }

    componentDidMount() {}

    runProgram() {
        //right
        //move
        //left
        //move
        //repeat 5 times
        //  move
        //  right
        //  move
        //  if can move
        //    move
        //up
        //jump`;

        // Get source.
        const source = this.sourceRef.current.value;
        console.log(source);

        // Parse source.
        const tree = parse(source);

        // Run command.
        this.props.store.execute(tree);
    }

    render() {
        const { store } = this.props;
        return (
            <StyledChallenge>
                {this.state.showInfo && (
                    <div>
                        <Title>1. päivä</Title>
                        <p>
                            Veljesten nimet vanhimmasta nuorimpaan ovat: Juhani,
                            Tuomas, Aapo, Simeoni, Timo, Lauri ja Eero. Ovat
                            heistä Tuomas ja Aapo kaksoispari ja samoin Timo ja
                            Lauri.
                        </p>
                        <CodeSample>
                            up
                            <br />
                            move
                            <br />
                        </CodeSample>
                        <p>
                            Heidän isäänsä, joka oli ankaran innokas metsämies,
                            kohtasi hänen parhaassa iässään äkisti surma, kun
                            hän tappeli äkeän karhun kanssa. Molemmat silloin,
                            niin metsän kontio kuin mies, löyttiin kuolleina.
                        </p>
                        <Button
                            onClick={() => this.setState({ showInfo: false })}
                        >
                            Näytä koodi
                        </Button>
                    </div>
                )}
                {!this.state.showInfo && (
                    <div>
                        <CodeArea ref={this.sourceRef} defaultValue="" />
                        <Button
                            onClick={() => this.setState({ showInfo: true })}
                        >
                            Näytä ohje
                        </Button>
                        <Button onClick={() => this.runProgram()}>
                            Käynnistä ohjelma
                        </Button>
                    </div>
                )}
            </StyledChallenge>
        );
    }
}

export default Challenge;
