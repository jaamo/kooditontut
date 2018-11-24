import React from 'react';
import styled from 'styled-components';
import { STYLE_CELL_WIDTH } from '../constants/styles.js';

const StyledElf = styled.div`
    position: absolute;
    width: ${STYLE_CELL_WIDTH}rem;
    height: ${STYLE_CELL_WIDTH}rem;
    left: ${props => props.elf.x * STYLE_CELL_WIDTH}rem;
    top: ${props => props.elf.y * STYLE_CELL_WIDTH}rem;
    background-color: green;
`;

class Elf extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        const { elf } = this.props;
        return (
            <StyledElf elf={elf}>
                {elf.x}/{elf.y}
            </StyledElf>
        );
    }
}

export default Elf;
