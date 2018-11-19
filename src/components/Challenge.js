import React from 'react';
import { observer } from 'mobx-react';
import parse from '../lib/parser.js';

@observer
class Challenge extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let source = `down
move
left
repeat 5 times
  move
  right
  move
  if can move
    move
up
jump`;

        // Parse source.
        const tree = parse(source);

        // Run command.
        this.props.store.execute(tree);
    }

    render() {
        const { store } = this.props;
        return (
            <div>
                otsikko: {store.title}
                <br />
                <br />
                x: {store.elf.x} <br />
                y: {store.elf.y} <br />
                direction: {store.elf.direction} <br />
                <textarea defaultValue="moi" />
            </div>
        );
    }
}

export default Challenge;
