import React from "react";
import styled from "styled-components";
import { BsTrashFill } from "react-icons/bs";

function Todos({ todos, done, show, deleteTime, handleDelete, deleteAll }) {
    function confirmDelete() {
        const confirm = window.confirm(
            "Are you sure you want to delete all todos?"
        );
        if (confirm) {
            deleteAll();
        }
    }

    function buttonDelete() {
        if (deleteTime && todos.delete) {
            return (<div className="redbox" onClick={confirmDelete}>
                <p>Erase all</p>
            </div>);
        }
    }

    function showTodo() {
        return todos.map((todo) => {
            if (!todo.done && !todo.delete) {
                return (
                    <>
                        <TodoStyled key={todo.id}>
                            <input
                                type="checkbox"
                                name="checkbox"
                                id=""
                                onClick={() => done(todo.id)}
                            />
                            <p>{todo.text}</p>
                            {deleteTime && (
                                <BsTrashFill
                                    size={25}
                                    onClick={() => handleDelete(todo.id)}
                                />
                            )}
                        </TodoStyled>
                    </>
                );
            }
            return null;
        });
    }

    function showDone() {
        return todos.map((todo) => {
            if (todo.done && !todo.delete) {
                return (
                    <TodoStyled key={todo.id}>
                        <input
                            type="checkbox"
                            name="checkbox"
                            checked={todo.done ? true : false}
                            onClick={() => done(todo.id)}
                        />
                        <p style={{ textDecoration: "line-through" }}>
                            {todo.text}
                        </p>
                        {deleteTime && (
                            <BsTrashFill
                                size={25}
                                onClick={() => handleDelete(todo.id)}
                            />
                        )}
                    </TodoStyled>
                );
            }
            return null;
        });
    }

    function showAll() {
        return todos.map((todo) => {
            if (!todo.delete) {
                return (
                    <TodoStyled key={todo.id}>
                        <input
                            type="checkbox"
                            name="checkbox"
                            checked={todo.done ? true : false}
                            onClick={() => done(todo.id)}
                        />
                        <p className={todo.done ? "done":undefined}>{todo.text}</p>
                        {deleteTime && (
                            <BsTrashFill
                                size={25}
                                onClick={() => handleDelete(todo.id)}
                            />
                        )}
                    </TodoStyled>
                );
            }
        });
    }

    return (
        <PanelStyles>
        {buttonDelete()}
            {show === "todo" && showTodo()}
            {show === "done" && showDone()}
            {show === "all" && showAll()}
        </PanelStyles>
    );
}

const TodoStyled = styled.div`
    margin: 0rem 2rem;
    border: 1px solid #c9c9c9;
    padding: 1.5rem;
    display: grid;
    justify-content: center;
    align-content: center;
    position: relative;
    grid-template-columns: 5rem 1fr;

    p {
        font-size: 1.5rem;
        margin-left: 4rem;
    }

    input[type="checkbox"] {
        height: 15px;
        width: 15px;
        background: #fff;
        border: 1px solid #ccc;
        margin: auto;
        transform: scale(2);
        cursor: pointer;
    }
    svg {
        position: absolute;
        color: #c9c9c9;
        right: 2rem;
        top: 1.5rem;
        cursor: pointer;
    }
`;

const PanelStyles = styled.div`
    height: 100%;
    position: relative;
`;

export default Todos;
