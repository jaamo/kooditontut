import React from 'react';
import Challenge from '../components/Challenge.js';

class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <div>
                lol
                <Challenge store={this.props.store} />
            </div>
        );
    }
}

export default Game;
