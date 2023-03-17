import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodoListContainer from './containers/TodoListContainer';

function App() {
  return (
    <div className='App'>
      <CounterContainer/>
      <TodoListContainer/>
    </div>
  );
}

export default App;
