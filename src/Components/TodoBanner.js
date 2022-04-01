import React from "react";
import styled from "styled-components";
import { BsCalendarPlus } from "react-icons/bs";
import { AiFillCheckCircle, AiOutlineMenuUnfold } from "react-icons/ai";
import Todos from "./Todos";
import {fadeIn} from 'react-animations';

function TodoBanner({todos, done,deleteTime, handleDelete, deleteAll}) {
    const [show, setShow] = React.useState('todo');
    console.log(show);
    return (
        <>
            <TodoBannerStyled>
                <div className={show==='todo' && 'active'} onClick={()=> setShow('todo')}>
                    <BsCalendarPlus />
                    <p>To Do</p>
                </div>
                <div className={show==='done' && 'active'} onClick={()=> setShow('done')}>
                    <AiFillCheckCircle />
                    <p>Done</p>
                </div>
                <div className={show==='all' && 'active'} onClick={()=> setShow('all')}>
                    <AiOutlineMenuUnfold />
                    <p>All</p>
                </div>
            </TodoBannerStyled>
            <Todos todos = {todos} done = {done} show = {show} deleteTime ={deleteTime} handleDelete ={handleDelete} deleteAll={deleteAll} />
        </>
    );
}

const TodoBannerStyled = styled.div`
    width: 100%;
    height: 5rem;
    background: #248c9d;
    margin-top: 3rem;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .active svg, .active p{
        color: #ff1f00
    }

    svg {
        font-size: 2rem;
        color: white;
        margin: auto;
    }

    div {
        animation: 1s ${fadeIn};
        margin: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;

    }

    p {
        color: white;
        font-weight: 600;
        font-size: 1.2rem;
        text-transform: uppercase;
        margin-top: 0.2rem;
    }
`;

export default TodoBanner;
