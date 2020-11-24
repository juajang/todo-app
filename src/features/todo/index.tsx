import React from "react";
import TodoList from "./TodoList";

export const Todo = () => {
  return (
    <main style={{
      display: 'grid',
      marginTop: '5rem',
      placeItems: 'center',
    }}>
      <TodoList />
    </main>
  );
};