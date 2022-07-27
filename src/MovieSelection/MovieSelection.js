import './style.css';

export default function MovieSelection ({movies}){
    console.log(movies);
    return (
        <>Selecione o filme
        <div className='movies'>
        {movies.map((movie)=><div className='movie' ><img src={movie.posterURL} alt={movie.title} /></div>)}
        </div>
        </>        
    )
}