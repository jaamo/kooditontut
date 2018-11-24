import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
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
`;

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledButton onClick={this.props.onClick}>
                {this.props.children}
            </StyledButton>
        );
    }
}

export default Button;
