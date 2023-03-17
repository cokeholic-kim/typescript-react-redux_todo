const ADDTODO = 'todos/ADDTODO' ;
const DELTODO = 'todos/DELTODO' ;
const TOGGLETODO = 'todos/TOGGLETODO' ;

export const addtodo = (todo:{}) =>({
    type:ADDTODO,
    payload:todo
})

export const deltodo = (id:number)=>({
    type:DELTODO,
    payload:id
})

export const toggletodo = (id:number) =>({
    type:TOGGLETODO,
    payload:id
})

type todoAction = ReturnType<typeof addtodo>| ReturnType<typeof deltodo> |ReturnType<typeof toggletodo>
export type Todo = {    
    isDone:boolean;
    todo:string;
    id:number
}
export type TodoState = Todo[];


function todos(state:TodoState=[],action:todoAction){
    switch(action.type){
        case ADDTODO:
            return[
                ...state,
                action.payload
            ]
        case DELTODO:
            return state.filter(e=>e.id !== action.payload)
        case TOGGLETODO:
            return state.map(li=> li.id === action.payload ? {...li,isDone:!li.isDone}:li)
        default:
            return state
    }
}

export default todos;