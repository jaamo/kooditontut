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
`;

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        let days = [];
        for (let i = 1; i <= 24; i++) {
            days.push(
                <Day key={i} onClick={() => this.props.changeView('challenge')}>
                    {i}
                </Day>
            );
        }
        return <StyledCalendar>{days}</StyledCalendar>;
    }
}

export default Calendar;
