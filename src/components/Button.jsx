import React from "react";
import styled from "styled-components";


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
export default function Button(props){
    return(
        <div>
            <Btn type="submit" onClick = {props.clickHandler} >{props.children}</Btn>
        </div>
    );
}