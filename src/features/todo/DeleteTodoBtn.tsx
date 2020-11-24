import React, { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from './todoSlice';
import { CloseOutlined } from "@ant-design/icons";

interface ButtonProps {
  seq: number;
}

const DeleteTodoBtn = ({ seq }: ButtonProps) => {
  const dispatch = useDispatch();

  const handleClick = (seq: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(deleteTodo(seq));
  };

  return (
    <button
      onClick={handleClick(seq)}
      style={{
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
      }}
    >
      <CloseOutlined />
    </button>
  );
};

export default DeleteTodoBtn;