import React, { useState } from "react";  
import styled from "styled-components";
import Button from "./Button";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    & *{
        margin-bottom: 0.5rem;
    }
    & input{
        border: 1px solid #ccc;
        border-radius: 0.3rem;
        height: 1.3rem;
        padding: 0.7rem 0.5rem;
    }

    & input:focus-visible{
        outline: transparent;
    }

`;


export default function UserInput(props){
    const [enteredValue, setEnteredValue] = useState({
        'username' : '',
        'age' : ''
    });

    

    const handleInput =(e) =>{
        setEnteredValue(prev =>{
            let temp = prev;
            temp[`${e.target.name}`] = e.target.value;
            return temp;
        });
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(enteredValue['username'].trim().length>0 && enteredValue['age'].trim().length>0){
            props.addUser(enteredValue);
        }else{
            props.showError()
        }
    }

    
    return(
        <Form>
            <label>Username</label>
            <input type="text" name="username" onChange={handleInput}/>
            <label>Age</label>
            <input type="number" name="age" onChange={handleInput}/>
            <Button clickHandler={handleSubmit}>Add user</Button>
            
        </Form>
    );
}
