import React, { useState } from 'react';

interface Prop {
    onsubmit:(todo:string)=>void
}
const Input = ({onsubmit}:Prop) => {
    const [input,setinput] = useState("")
    const onchange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setinput(e.target.value)
    }
    const onsubmittodo = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        onsubmit(input)
        setinput("")
    }
    return (
        <form onSubmit={onsubmittodo}>
           <input value={input} onChange={onchange}/> 
        </form>
    );
};

export default Input;