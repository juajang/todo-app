import React from 'react';
import { Counter } from './features/counter/Counter';
import { Todo } from './features/todo';
import './App.css';

function App() {
  return (
    <div className="App">
        <Todo/>
        <Counter />
    </div>
  );
}

export default App;
