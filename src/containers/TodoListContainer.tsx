import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Input from '../components/Input';
import Todos from '../components/Todos';
import { RootState } from '../module';
import { addtodo,deltodo, toggletodo } from '../module/todos';

const TodoListContainer = () => {
    const state = useSelector((state:RootState)=>state.todos)
    const dispatch = useDispatch()
    const count = useRef(0)
    const onsubmit=(todo:string)=>{
        const newtodo = {
            isDone:false,
            todo:todo,
            id:count.current+=1
        }
        dispatch(addtodo(newtodo))
    }
    const delTodo = (id:number)=>{
        dispatch(deltodo(id))
    }
    const toggleTodo = (id:number)=>{
        dispatch(toggletodo(id))
    }
    return (
        <div>
            <Input onsubmit={onsubmit}/>
            <Todos state={state} delTodo={delTodo} toggleTodo={toggleTodo}/>
        </div>
    );
};

export default TodoListContainer;