import styled from "styled-components";

export default function Footer({ title, posterURL, hour, day }) {
    return (
        <FooterDiv>
            <MovieSelected>
                <img src={posterURL} alt={title} />
            </MovieSelected>
            <p>{title}<br />
                {hour ? <span>{day} - {hour}</span> : ""}
            </p>
        </FooterDiv>
    )
}
const FooterDiv = styled.div`
    height: 117px;
    width: 100%;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
`
const MovieSelected = styled.div`
    width: 64px;
    height: 89px;
    border-radius: 2px;
    margin: 0 14px 0 10px;
    box-shadow: 0px 2px 4px 0px #0000001A;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    img {
        width: 48px;
        height: 72px;
    }
`