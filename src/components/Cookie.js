import React from 'react';
import styled from 'styled-components';
import { STYLE_CELL_WIDTH } from '../constants/styles.js';

const StyledCookie = styled.div`
    position: absolute;
    width: ${STYLE_CELL_WIDTH}rem;
    height: ${STYLE_CELL_WIDTH}rem;
    left: ${props => props.x * STYLE_CELL_WIDTH}rem;
    top: ${props => props.y * STYLE_CELL_WIDTH}rem;
    background-color: blue;
`;

class Cookie extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        const { x, y } = this.props;
        return <StyledCookie x={x} y={y} />;
    }
}

export default Cookie;
