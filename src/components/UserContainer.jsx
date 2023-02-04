import React from "react";  
import styled from "styled-components";
const UserContainerStyled = styled.div`
    display : flex;
    cursor: pointer;
    & div{
        width: 50%;
        font-weight: bold;
        color: #181818;
    }
`;




export default function UserContainer(props){
    const handleDelete = (e)=>{
        props.deleteUser(e.target.innerText);
    }
    
    return(
        <UserContainerStyled >
            <div>
                <p onClick={handleDelete}>{props.user['username']}</p>
                <br/>
            </div>
            <div>
                <p>{props.user['age']}</p>
                <br/>
            </div>
        </UserContainerStyled>
    )
}