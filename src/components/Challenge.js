import React from 'react';
import run from '../lib/eval.js';

class Challenge extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        run();
    }

    render() {
        return (
            <div>
                <textarea defaultValue="moi" />
            </div>
        );
    }
}

export default Challenge;
