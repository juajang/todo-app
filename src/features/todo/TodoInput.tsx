import React, { useState } from "react"
import { addTodo } from './todoSlice';
import { useDispatch } from "react-redux";
import { Input } from 'antd';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    if (todo.length > 0) {
      dispatch(addTodo(todo));
      setTodo('');
    }
    e.preventDefault();
  };

  return (
      <>
        <h1> Todo List </h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            onChange={handleChange}
            value={todo}
            placeholder="투두를 입력하세요!"
          />
        </form>
      </>
  );
};

export default TodoInput;