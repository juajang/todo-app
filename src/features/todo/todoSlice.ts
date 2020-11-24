import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Todo  {
    seq: number;
    content: string;
    isCompleted: boolean;
}

interface TodoList {
    data: Array<Todo>
}

interface TodoState {
    current: TodoList;
    error: boolean;
    errorText: string | null;
}

const initialState: TodoState = {
    current: {
        data: [
            {
                seq: 1,
                content: "밥 먹기",
                isCompleted: false,
            },
            {
                seq: 2,
                content: "초밥 먹기",
                isCompleted: true,
            }
        ],
    },
    error: false,
    errorText: null,
}

export const slice = createSlice({
    name: "todolist",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.current.data = [...state.current.data, {
                seq: state.current.data.length + 1,
                content: action.payload,
                isCompleted: false,
            }];
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            state.current.data = state.current.data.map(({ content, seq, isCompleted }) => {
                if (seq === action.payload) {
                    return { seq, content, isCompleted: !isCompleted };
                }
                else return { seq, content, isCompleted };
            })
        },
    }
})

export const { addTodo, toggleTodo } = slice.actions;

export const selectTodoList = (state: RootState) => state.todolist.current.data;

export default slice.reducer;