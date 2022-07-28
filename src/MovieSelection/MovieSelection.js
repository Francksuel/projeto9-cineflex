import './style.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
                <div className='movies'>
                    {movies.map((movie) => <Link to={`/movie/${movie.id}`} key={movie.id}>
                        <div className='movie' >
                            <img src={movie.posterURL} alt={movie.title} />
                        </div>
                    </Link>)}
                </div>
                :
                <p>Carregando</p>
            }
        </>
    )
}