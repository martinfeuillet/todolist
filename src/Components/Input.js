import React from 'react'
import styled from 'styled-components'


function Input({submit}) {
    const [val, setVal] = React.useState('');

    function handleChange(e) {
        setVal(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault()
        submit(val)
        setVal('')
        
    }
        
    
  return (
    <InputStyled>
        <form>
            <div>
                <label htmlFor="todo">Add Task</label>
                <input type="text" value={val} onChange={handleChange} />
            </div>
            <button type='submit' onClick={handleClick}>Create</button>
        </form>
    </InputStyled>
  )
}

export default Input


const InputStyled = styled.div`
    margin: 0 3rem;
    margin-top: 3rem;
   

    label{
        display: block;
        font-weight: 500;
        color: #7d7d7d;
    }

    form{
        display: flex;
        justify-content: center;
    }

    label{
        margin-bottom: 1rem;
    }
 
    input[type="text"]{
        width: 30rem;
        height: 2rem;
        font-size: 1.7rem;
        outline: none;
        border: none;
        border-bottom: 3px solid #c9c9c9;
    }
    input[type="text"]:focus{
        border-bottom: 3px solid #248C9D;
    }
    button{
        padding: 0.3rem 1rem ;
        cursor: pointer;
        text-transform: uppercase;
        color: #7d7d7d;
        display: inline;
        margin-left: 1.5rem;
        border: none;
        box-shadow: 0px 0px 2px rgba(0,0,0,0.2);
        font-size: 1.4rem;
    }

    @media screen and (max-width: 650px){
        margin: 2rem 1rem;

        input[type="text"]{
        width: 15rem;

    }
    } 
        
    

`