import styled from "styled-components"; 


const Card = styled.div`   
    width: 500px;
    background: white;
    color : #202020;
    margin: 2rem;
    padding: 2rem;
    border-radius:1rem;
    font-size: 1rem;
    border : 2px solid ${props => props.borderColor};
    @media (max-width: 640px) {
        width: 80vw;
    }
`;

export default Card;