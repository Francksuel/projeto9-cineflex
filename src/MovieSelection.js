import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function MovieSelection({ URL }) {
    const [movies, setMovies] = useState();

    useEffect(() => {
        const promise = axios.get(`${URL}movies`);
        promise.then((response) => {
            setMovies(response.data)
        })
    }, []);

    return (
        <>
            <h2>Selecione o filme</h2>
            {movies ?
                <Movies>
                    {movies.map((movie) => <Link to={`/movie/${movie.id}`} key={movie.id}>
                        <Movie>
                            <img src={movie.posterURL} alt={movie.title} />
                        </Movie>
                    </Link>)}
                </Movies>
                :
                <p>Carregando</p>
            }
        </>
    )
}
const Movies = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 43px;
`
const Movie = styled.div`
    width: 145px;
    height: 209px;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    margin: 0px 15px 11px 15px;
    cursor: pointer;
    img{
        width: 129px;
        height: 193px;
    }
`