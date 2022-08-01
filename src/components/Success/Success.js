import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Common/Button";

export default function Success() {
    const location = useLocation();
    const navigate = useNavigate();
    let aux = location.state.cpf;
    let cpf = aux.substr(0, 3) + "." + aux.substr(3, 3) + "." + aux.substr(6, 3) + "-" + aux.substr(9, 2);
    
    function backToHome() {
        navigate("/")
    }   

    return (
        <>
            <Text>Pedido feito com sucesso!</Text>
            <SuccessDiv>
                <h5>Filme e sessão</h5>
                <p>{location.state.movie}</p>
                <p>{location.state.date} - {location.state.hour}</p>
                <h5>Ingressos</h5>
                {location.state.assentos.map((num, index) => <p key={index}>Assento {num}</p>)}
                <h5>Comprador</h5>
                <p>Nome: {location.state.name}</p>
                <p>CPF: {cpf}</p>
            </SuccessDiv>
            <Button onClick={() => backToHome()}>Voltar para Home</Button>
        </>
    )
}

const SuccessDiv = styled.div`
    display: flex;
    width: 87.5vw;
    flex-direction: column;
    align-items: flex-start;
    h5{
        color: #293845;
        font-size: 24px;
        font-weight: 700;
        margin-top: 33px;
        margin-bottom: 5px;
    }
    p {
        margin: 3px;
    }
`
const Text = styled.h1`  
    font-size: 24px;
    font-weight: 700;
    color: #247A6B;
    width: 40vw;
    margin: 27px 0;
    text-align: center;
`