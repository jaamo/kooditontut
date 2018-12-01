import React from 'react';
import styled from 'styled-components';
import { STYLE_CELL_WIDTH } from '../constants/styles.js';

/**
 * Rotate elf based on direction.
 */
function directionToAngle(direction) {
    console.log('directionToAngle ' + direction);
    if (direction == 'up') {
        return '0deg';
    }
    if (direction == 'right') {
        return '90deg';
    }
    if (direction == 'down') {
        return '180deg';
    }
    if (direction == 'left') {
        return '270deg';
    }
}

const StyledElf = styled.div`
    position: absolute;
    width: ${STYLE_CELL_WIDTH}rem;
    height: ${STYLE_CELL_WIDTH}rem;
    left: ${props => props.elf.x * STYLE_CELL_WIDTH}rem;
    top: ${props => props.elf.y * STYLE_CELL_WIDTH}rem;
    transition: all 0.4s ease-out;
    transform: rotate(${props => directionToAngle(props.elf.direction)});
`;

class Elf extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        const { elf } = this.props;
        console.log(elf.direction);
        return (
            <StyledElf elf={elf}>
                <img src="/img/elf.svg" />
            </StyledElf>
        );
    }
}

export default Elf;
