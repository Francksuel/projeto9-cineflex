import { BrowserRouter, Routes, Route } from "react-router-dom";
import './reset.css';
import './style.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from "react";
import MovieSelection from "./MovieSelection/MovieSelection";
import SessionSelection from "./SessionSelection/SessionSelection";

export default function App() {
    const URL = 'https://mock-api.driven.com.br/api/v5/cineflex/';
    const [movies, setMovies] = useState();

    useEffect(() => {
        const promise = axios.get(`${URL}movies`);
        promise.then((response) => {
            setMovies(response.data)
        })
    }, []);

    return (
        <BrowserRouter>
            <div className="header">CINEFLEX</div>
            <div className="page">
            {movies ?
                <Routes>
                    <Route path="/" element={<MovieSelection movies={movies} />} />
                    <Route path='/filme/id' element={<SessionSelection movies={movies} />} />
                </Routes>
                :
                <p>Carregando página...</p>}
                </div>
        </BrowserRouter>
    )

}