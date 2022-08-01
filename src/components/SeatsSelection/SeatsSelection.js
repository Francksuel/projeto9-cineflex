import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import Footer from "../Footer/Footer";
import Seat from "../Seat/Seat";
import Form from "../Form/Form";

export default function SeatsSelection({ URL }) {
    const { idSession } = useParams();
    const [seats, setSeats] = useState();
    const [idsSelected, setIdsSelected] = useState([]);

    useEffect(() => {
        const promise = axios.get(`${URL}showtimes/${idSession}/seats`);
        promise.then((res) => {
            setSeats(res.data);
        })
    }, []);

    return (
        <>
            <h2>Selecione o(s) assento(s)</h2>
            {seats ?
                <>
                    <Seats key={seats.id} >
                        {seats.seats.map((seat) => <Seat seat={seat} idsSelected={idsSelected} setIdsSelected={setIdsSelected} key={seat.id} />)}
                    </Seats>
                    <Label>
                        <Status><Caption captionColor={"#8DD7CF"} /><p>Selecionado</p></Status>
                        <Status><Caption captionColor={"#C3CFD9"} /><p>Disponível</p></Status>
                        <Status><Caption captionColor={"#FBE192"} /><p>Indisponível</p></Status>
                    </Label>
                    <Form idsSelected={idsSelected} URL={URL} seats={seats}/>
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

const Status = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 3.4vw;
`
const Caption = styled.div`
    width: 6.7vw;
    height: 6.7vw;
    margin: 2.4vw 0.93vw;
    border-radius: 50%;
    background-color: ${props => props.captionColor}; 
    border: ${props =>
        props.captionColor === "#8DD7CF" ? "1px solid #45BDB0" :
            props.captionColor === "#C3CFD9" ? "1px solid #808F9D" :
                "1px solid #F7C52B"};    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.93vw;
`
const Label = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;    
    `
