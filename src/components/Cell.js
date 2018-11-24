import React from 'react';
import styled from 'styled-components';
import { STYLE_CELL_WIDTH } from '../constants/styles.js';

const backgroundColors = ['transparent', '#7B9971', 'red'];

const StyledCell = styled.div`
    position: absolute;
    width: ${STYLE_CELL_WIDTH - 0.4}rem;
    height: ${STYLE_CELL_WIDTH - 0.4}rem;
    margin: 0.2rem;
    left: ${props => props.x * STYLE_CELL_WIDTH}rem;
    top: ${props => props.y * STYLE_CELL_WIDTH}rem;
    background-color: ${props => backgroundColors[props.type]};
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    transform: rotate(${props => props.angle}deg);
`;

class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        const { type, x, y, angle } = this.props;
        return <StyledCell angle={angle} type={type} x={x} y={y} />;
    }
}

export default Cell;
