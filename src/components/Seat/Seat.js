import styled from 'styled-components';
import { useState } from 'react';

export default function Seat({ seat, idsSelected, setIdsSelected }) {
    const [seatColor, setSeatColor] = useState("#C3CFD9");

    function selectSeat(seat) {
        if (seat.isAvailable) {
            if (idsSelected.includes(seat.id)) {
                setSeatColor("#C3CFD9");
                let newArray = idsSelected.filter((id) => (id !== seat.id));

                setIdsSelected(newArray);
            } else {
                setSeatColor("#8DD7CF");
                let newArray = [...idsSelected, seat.id]
                setIdsSelected(newArray);
            }
        } else {
            alert("Esse assento não está disponível!");
        }
    }
    return (
        <>
            {seat ? <SeatDiv seatColor={seatColor} isAva={seat.isAvailable} key={seat.id}
                onClick={() => { selectSeat(seat) }} >
                <p>{seat.name}</p>
            </SeatDiv> : ""}
        </>
    )
}

const SeatDiv = styled.div`
    width: 6.45vw;
    height: 6.45vw;
    margin: 2.4vw 0.9vw;
    border-radius: 50%;
    background-color: ${props => props.isAva ? props.seatColor : '#FBE192'};
    border:  ${props =>
        props.isAva ? ((props.seatColor === "#8DD7CF") ? "1px solid #45BDB0" : "1px solid #808F9D")
            : '1px solid #F7C52B'};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.93vw;
    cursor: pointer;
`