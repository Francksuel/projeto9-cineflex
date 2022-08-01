import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

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
                    <Sessions>
                        {sessions.days.map((session) =>
                            <>
                                <h3>{session.weekday} - {session.date}</h3>
                                <Session key={session.id} >
                                    {session.showtimes.map((showtime) =>
                                        <Link to={`/session/${showtime.id}`} key={showtime.id}>
                                            <div><p>{showtime.name}</p></div>
                                        </Link>
                                    )}
                                </Session>
                            </>
                        )}
                    </Sessions>
                    <Footer title={sessions.title} posterURL={sessions.posterURL} />
                </>
                :
                <p>Carregando</p>
            }

        </>
    )
}
const Sessions = styled.div`
    width: 88%;
    margin-top: 20px;   
    h3 {
        font-size: 20px;
        margin: 23px 0px;
        color: #293845;
    }
`
const Session = styled.div`
    display: flex;
    justify-content: flex-start;
    div {
        width: 83px;
        height: 43px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #E8833A;
        color: #ffffff;
        font-size: 18px;
        border-radius: 3px;
        margin-right: 8px;
    }
`