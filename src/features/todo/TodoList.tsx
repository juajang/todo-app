import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, selectTodoList } from './todoSlice';
import { Checkbox, List } from 'antd';
import TodoInput from "./TodoInput";
import DeleteTodoBtn from "./DeleteTodoBtn";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const TodoList = () => {
    const dispatch = useDispatch();
    const todoList = useSelector(selectTodoList);

    const onToggleTodo = useCallback((seq: number) => (event: CheckboxChangeEvent) => {
      dispatch(toggleTodo(seq))
    },[dispatch]);

    return (
      <List
        header={<TodoInput/>}
        bordered
        dataSource={todoList}
        renderItem={({ seq, content, isCompleted}) =>
          <List.Item>
            <Checkbox onChange={onToggleTodo(seq)} checked={isCompleted}>
              {content}
            </Checkbox>
            <DeleteTodoBtn seq={seq}/>
          </List.Item>
        }
        style={{
          width: '30rem'
        }}
      />
    );
}

export default TodoList;