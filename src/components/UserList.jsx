import React from "react";
import styled from "styled-components";
import UserContainer from "./UserContainer";

const ListContainer = styled.div`
    display : flex;
    & div{
        width: 50%;
        font-weight: bold;
        color: #0549af;
    }
`


export default function UserList(props){
    let users = props.users
    return(
        <div>
            <ListContainer>
                <div>
                    <p>UserName</p>
                    <br/>
                </div>
                <div>
                    <p>Age</p>
                    <br/>
                </div>
            </ListContainer>
            {users.map((user,index) => {
                return(
                    <UserContainer user={user} key={index} deleteUser= {props.deleteUser}/>
                );
            })}

        </div>
        
    );
}