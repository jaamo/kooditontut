import React from 'react';
import styled from 'styled-components';

const StyledCalendar = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 40rem;
`;

const Day = styled.div`
    width: 6rem;
    height: 6rem;
    background: #ffefb9;
    color: black;
    line-height: 6rem;
    text-align: center;
    margin: 1rem;
    font-size: 3rem;
    font-weight: 700;
    box-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 1);
    transform: rotate(${props => props.angle}deg);
`;

const DisabledDay = styled.div`
    width: 6rem;
    height: 6rem;
    background: #d1d1d1;
    color: black;
    line-height: 6rem;
    text-align: center;
    margin: 1rem;
    font-size: 3rem;
    font-weight: 700;
    box-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 1);
    transform: rotate(${props => props.angle}deg);
`;

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        let days = [];
        for (let i = 1; i <= 24; i++) {
            const date = new Date(2018, 11, i);
            const angle = -10 + Math.random() * 20;
            if (this.props.currentDate.getTime() > date.getTime()) {
                days.push(
                    <Day
                        key={i}
                        angle={angle}
                        onClick={() => this.props.pickDate(i)}
                    >
                        {i}
                    </Day>
                );
            } else {
                days.push(
                    <DisabledDay angle={angle} key={i}>
                        {i}
                    </DisabledDay>
                );
            }
        }
        return <StyledCalendar>{days}</StyledCalendar>;
    }
}

export default Calendar;
