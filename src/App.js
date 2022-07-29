import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import './reset.css';
import MovieSelection from "./MovieSelection";
import SessionSelection from "./SessionSelection";
import SeatsSelection from "./SeatsSelection";

export default function App() {
    const URL = 'https://mock-api.driven.com.br/api/v7/cineflex/';

    return (
        <GlobalStyle>
            <BrowserRouter>
                <Header>CINEFLEX</Header>
                <Page>
                    <Routes>
                        <Route path="/" element={<MovieSelection URL={URL} />} />
                        <Route path='/movie/:idMovie' element={<SessionSelection URL={URL} />} />
                        <Route path='/session/:idSession' element={<SeatsSelection URL={URL} />} />
                    </Routes>
                </Page>
            </BrowserRouter>
        </GlobalStyle>
    )
}
const GlobalStyle = styled.div`
    font-family: 'Roboto', sans-serif;
`
const Header = styled.div`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    color: #E8833A;
    font-size: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Page = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    h2 {
        margin-top: 43px;
        font-size: 24px;
        color: #293845;
    }
`