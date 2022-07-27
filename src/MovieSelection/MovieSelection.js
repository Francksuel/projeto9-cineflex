import './style.css';

export default function MovieSelection({ movies }) {
    return (
        <>
            <h2>Selecione o filme</h2>
            <div className='movies'>
                {movies.map((movie) =>
                    <div className='movie' onClick={() => alert(movie.id)} >
                        <img src={movie.posterURL} alt={movie.title} />
                    </div>)}
            </div>
        </>
    )
}