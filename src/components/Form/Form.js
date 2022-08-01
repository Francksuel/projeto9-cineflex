import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Button from "../Common/Button";

export default function Form({ idsSelected, URL, seats }) {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate()

    function sendForm(event) {
        event.preventDefault();
        if (cpf.length !== 11) {
            alert("No CPF, digite apenas os 11 números");
        } else {
            if (idsSelected.length === 0) {
                alert("Selecione um assento, no mínimo!")
            } else {
                let assentos = idsSelected.map((x) => x % 50);
                const dataClient = {
                    ids: idsSelected,
                    name,
                    cpf,
                    hour: seats.name,
                    date: seats.day.date,
                    movie: seats.movie.title,
                    assentos,
                }
                const request = axios.post(`${URL}seats/book-many`, {
                    ids: idsSelected,
                    name,
                    cpf
                });
                request.then(() =>
                    navigate("/success", { state: dataClient })
                )
            }
        }
    }

    return (
        <Forms onSubmit={sendForm}>
            <p>Nome do comprador:</p>
            <input type="text" value={name} required onChange={e => setName(e.target.value)} />
            <p>CPF do comprador:</p>
            <input type="number" value={cpf} required onChange={e => setCpf(e.target.value)} />
            <div>
                <Button >Reservar assento(s)</Button>
            </div>
        </Forms>
    );
}

const Forms = styled.form`
    width: 87.2vw;
    font-size: 18px;
    color: #293845;
    margin-top: 41px;
    input{
        width: 100%;
        height: 51px;
        border-radius: 3px;
        margin-top: 2px;
        margin-bottom: 7px
        ;
        border: 1px solid #D4D4D4;  
        font-size  : 18px;
    }
    div{
        display: flex;
        justify-content: center;        
    }
`