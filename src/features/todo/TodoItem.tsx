import React from "react";
import { Todo } from './todoSlice';
import { Checkbox, List } from 'antd';
import {CloseOutlined} from "@ant-design/icons";

type TodoItemProps = {
  todo: Todo;
  onToggleTodo: (seq: number) => void;
  onDeleteTodo: (seq: number) => void;
};

const TodoItem = ({ onToggleTodo, onDeleteTodo, todo }: TodoItemProps) => {
  const handleChange = () => {
    onToggleTodo(todo.seq);
  };

  const handleClick = () => {
    onDeleteTodo(todo.seq);
  };

  return (
    <List.Item>
      <Checkbox onChange={handleChange} checked={todo.isCompleted}>
        {todo.content}
      </Checkbox>
      <button
        onClick={handleClick}
        style={{
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
        }}>
        <CloseOutlined />
      </button>
    </List.Item>
  );
};

export default TodoItem;