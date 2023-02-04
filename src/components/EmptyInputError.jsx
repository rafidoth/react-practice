import React from 'react';
import Card from './Card.styled';
import styled from 'styled-components';
import Button from './Button';

const EmptyError = styled.div`
    position: absolute;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background: rgba(5, 73, 175, 0.04);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
const Btn = styled.button`
    background-color: #0549af;
    color: white;
    padding: 0.5rem;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
    font-weight: bold;

    &:hover{
        scale : 0.96;
    }
`;
export default function EmptyInputError(props){
    const handleKeypress = (e)=>{
        if(e.keyCode ===13){
            console.log('h')
        }
    }
    return(
        <EmptyError>
            <Card borderColor = "#0549af">
                Please Enter Valid Information. Thank you.
                <br />
                <Btn onClick={props.closeError}  >Close</Btn>
            </Card>
        </EmptyError>
    );
}