import React from 'react';
import styled from 'styled-components';

const StyledBackButton = styled.button`
    background-color: #941f1f;
    padding: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-right: 1rem;
    font-family: 'Mountains of Christmas', cursive;
    border: 0;
    color: #ffefb9;
    font-size: 2rem;
    font-weight: 700;
    transform: rotate(${-10 + Math.random() * 20}deg);
    position: absolute;
    bottom: 1rem;
    left: calc(50% + 1rem);
`;

class BackButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledBackButton onClick={this.props.onClick}>
                Takaisin
            </StyledBackButton>
        );
    }
}

export default BackButton;
