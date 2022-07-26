import { BrowserRouter, Routes, Route } from "react-router-dom";
import './reset.css';
import styled from "styled-components";
import MovieSelection from "./components/MovieSelection/MovieSelection";
import SessionSelection from "./components/SessionSelection/SessionSelection";
import SeatsSelection from "./components/SeatsSelection/SeatsSelection";
import Success from "./components/Success/Success";

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
                        <Route path='/success' element={<Success URL={URL} />} />
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
    position: fixed;
    top: 0;
    left: 0;
`
const Page = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 67px;
    margin-bottom: 147px;
    h2 {
        margin-top: 43px;
        font-size: 24px;
        color: #293845;
    }
`