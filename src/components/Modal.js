import React from 'react';
import styled from 'styled-components';
import Button from './Button.js';

const Backdrop = styled.div`
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
    align-items: center;
    justify-content: center;
    display: flex;
`;

const ModalWindow = styled.div`
    background: #34502b;
    display: inline-block;
    padding: 4rem;
    text-align: center;
    box-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.8);
    transform: rotate(3deg);
`;

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Backdrop>
                <ModalWindow>
                    <p>
                        WOW! Sait kerättyä kaikki piparit!{' '}
                        <b>Onneksi olkoon!</b>
                    </p>
                    <Button onClick={this.props.onClick}>Jatka</Button>
                </ModalWindow>
            </Backdrop>
        );
    }
}

export default Modal;
