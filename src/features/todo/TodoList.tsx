import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectTodoList } from './todoSlice';
import 'antd/dist/antd.css';
import {Checkbox, List, Typography} from 'antd';

const TodoList = () => {
    const dispatch = useDispatch();
    const todoList = useSelector(selectTodoList);

    return (
      <List header={<h2> TodoList</h2>}
            bordered
            dataSource={todoList}
            renderItem={({ seq, content, isCompleted}) =>
              <List.Item>
                <Checkbox> {content} </Checkbox>
              </List.Item>
            }
            style={{
              width: '30rem'
            }}
      />
    );
}

export default TodoList;