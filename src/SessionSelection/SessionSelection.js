import './style.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';


export default function SessionSelection({ URL }) {
    const { idMovie } = useParams();
    const [sessions, setSessions] = useState();
    useEffect(() => {
        const promise = axios.get(`${URL}movies/${idMovie}/showtimes`);
        promise.then((res) => {
            setSessions(res.data);
        })
    }, []);
    return (
        <>
            <h2>Selecione o horário</h2>
            {sessions ?
                <>
                    <div className='sessions'>
                        {sessions.days.map((session) =>
                            <>
                                <h3>{session.weekday} - {session.date}</h3>
                                <div className='session' key={session.id} >
                                    {session.showtimes.map((showtime) =>
                                        <Link to={`/session/${showtime.id}`} key={showtime.id}>
                                            <div className='showtime'>
                                                <p>{showtime.name}</p>
                                            </div>
                                        </Link>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                    <Footer title={sessions.title} posterURL={sessions.posterURL}/>
                </>
                :
                <p>Carregando</p>
            }

        </>
    )
}