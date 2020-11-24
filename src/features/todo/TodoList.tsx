import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, selectTodoList } from './todoSlice';
import 'antd/dist/antd.css';
import { Checkbox, List } from 'antd';

const TodoList = () => {
    const dispatch = useDispatch();
    const todoList = useSelector(selectTodoList);

    const onToggleTodo = useCallback((seq: number) => (event: any) => {
      dispatch(toggleTodo(seq))
    },[dispatch]);

    return (
      <List
        header={<h2> TodoList</h2>}
        bordered
        dataSource={todoList}
        renderItem={({ seq, content, isCompleted}) =>
          <List.Item>
            <Checkbox onChange={onToggleTodo(seq)} checked={isCompleted}>
              {content}
            </Checkbox>
          </List.Item>
        }
        style={{
          width: '30rem'
        }}
      />
    );
}

export default TodoList;