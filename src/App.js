import React from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";
import TodoBanner from "./Components/TodoBanner";
import { BsTrashFill } from "react-icons/bs";
import styled from "styled-components";

function App() {
    const [todos, setTodos] = React.useState([]);
    const [deleteTime, setDeleteTime] = React.useState(false);
    console.log(todos);

    const handleSubmit = (val) => {
        const newTodo = {
            id: Date.now(),
            text: val,
            done: false,
            delete: false,
        };
        setTodos([...todos, newTodo]);
    };

    const handleDone = (id) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    done: !todo.done,
                };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const handleDelete = (id) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    delete: !todo.delete,
                };
            }
            return todo;
        });
        setTodos(newTodos);
    }

    function deleteAll() {
      const newTodos = todos.map((todo) => {
        return {
          ...todo,
          delete: true,
        };
      })
      setTodos(newTodos);
    }

    return (
        <div className="App">
            <Header />
            <Input submit={handleSubmit} />
            <TodoBanner todos={todos} done={handleDone} deleteTime = {deleteTime} handleDelete ={handleDelete} deleteAll={deleteAll} />
            {todos.length !== 0 && (
                <div className="trash">
                    <BsTrashFill className="trashIcon" size={30}
                    onClick={() => setDeleteTime(prev=>!prev)} />
                </div>
            )}
        </div>
    );
}

export default App;
