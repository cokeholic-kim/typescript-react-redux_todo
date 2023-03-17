import React from 'react';
import { TodoState } from '../module/todos';

interface Prop{
    state:TodoState
    delTodo:(id:number)=>void
    toggleTodo:(id:number)=>void
}
const Todos = ({state,delTodo,toggleTodo}:Prop) => {
    return (
        <ul>
            {state.map(li=><li key={li.id} style={{color: li.isDone? "red":"black"}}><span onClick={()=>toggleTodo(li.id)}>{li.todo}</span><button onClick={()=>delTodo(li.id)}>X</button></li>)}
        </ul>
    );
};

export default Todos;