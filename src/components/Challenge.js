import React from 'react';
import { observer } from 'mobx-react';

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

        source = `down
up`;

        this.props.store.moi();

        //this.props.store.run(source);
        setTimeout(() => {
            console.log('pihviii');
            this.props.store.title = 'pihvi';
        }, 2000);
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
                <textarea defaultValue="moi" />
            </div>
        );
    }
}

export default Challenge;
