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

const Description = styled.div`
    font-size: 1.6rem;
    .code {
        font-family: 'Share Tech Mono', monospace;
        padding-left: 1rem;
        font-size: 1.6rem;
    }
`;

const CodeArea = styled.textarea`
    font-family: 'Share Tech Mono', monospace;
    width: 30rem;
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
        // Get source.
        const source = this.sourceRef.current.value;

        // Save source.
        this.props.store.setSource(this.props.store.selectedDay, source);

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
                        <CodeArea
                            ref={this.sourceRef}
                            defaultValue={
                                store.getSource(store.selectedDay) ||
                                store.defaultSource
                            }
                        />
                        <Button
                            onClick={() => this.setState({ showInfo: true })}
                        >
                            Ohjeeseen
                        </Button>
                        <Button onClick={() => this.runProgram()}>
                            Käynnistä!
                        </Button>
                    </div>
                )}
            </StyledChallenge>
        );
    }
}

export default Challenge;
