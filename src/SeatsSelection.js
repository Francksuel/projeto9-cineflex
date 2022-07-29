import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import styled from 'styled-components';

export default function SeatsSelection({ URL }) {
    const { idSession } = useParams();
    const [seats, setSeats] = useState();
    const [seatColor, setseatColor] = useState("#C3CFD9"); 

    useEffect(() => {
        const promise = axios.get(`${URL}showtimes/${idSession}/seats`);
        promise.then((res) => {
            setSeats(res.data);
        })
    }, []);
    
    function seatColorChange(isAvailable) {
        if (isAvailable) {
            setseatColor("#8DD7CF");
        }
        return
    }
    return (
        <>
            <h2>Selecione o(s) assento(s)</h2>
            {seats ?
                <>
                    <Seats key={seats.seats.id} >
                        {seats.seats.map((seat) =>
                            <Seat seatColor={seatColor} isAvailable={seat.isAvailable} key={seat.id} onClick={() => seatColorChange(seat.isAvailable)}>
                                <p>{seat.name}</p>
                            </Seat>
                        )}
                    </Seats>
                    <Label>
                        <Status><Seat seatColor={"#8DD7CF"} isAvailable={true} /><p>Selecionado</p></Status>
                        <Status><Seat seatColor={"#C3CFD9"} isAvailable={true} /><p>Disponível</p></Status>
                        <Status><Seat /><p>Indisponível</p></Status>
                    </Label>
                    <Footer title={seats.movie.title} posterURL={seats.movie.posterURL} day={seats.day.weekday} hour={seats.name} />
                </>
                :
                <p>Carregando</p>
            }
        </>
    )
}

const Seats = styled.div`
    width: 90vw;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;      
`
const Seat = styled.div`
    width: 7vw;
    height: 7vw;
    margin: 2.4vw 0.93vw;
    border-radius: 50%;
    background-color: ${props => props.isAvailable ? props.seatColor : '#FBE192'};       
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.93vw;
`
const Status = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 3.4vw;
`
const Label = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 140px;
    `