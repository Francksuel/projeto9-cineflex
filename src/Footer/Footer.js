import './style.css';

export default function Footer({ title, posterURL }) {
    console.log(title);
    return (
        <div className="footer" >
            <div className='movie-selected'>
                <img src={posterURL} alt={title} />
            </div>
            <p>{title}</p>
        </div>
    )
}