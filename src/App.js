import { BrowserRouter, Routes, Route } from "react-router-dom";
import './reset.css';
import './style.css';
import MovieSelection from "./MovieSelection/MovieSelection";
import SessionSelection from "./SessionSelection/SessionSelection";

export default function App() {
    const URL = 'https://mock-api.driven.com.br/api/v5/cineflex/';
 

    return (
        <BrowserRouter>
            <div className="header">CINEFLEX</div>
            <div className="page">            
                <Routes>
                    <Route path="/" element={<MovieSelection URL={URL}/>} />
                    <Route path='/movie/:idMovie' element={<SessionSelection URL={URL}/>} />
                </Routes>               
                </div>
        </BrowserRouter>
    )

}