import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoForm() {
    
    const [todo, setTodo] = useState('');//initial value empty 
    //todo is for individual todo
    const {addTodo} = useTodo();//useTodo coming from C:\Users\AMRNATH\OneDrive - Capgemini\chai aur react\10todocontextLocal\10todocontextLocal\src\context\TodoContext.js
    const add = (e) => {
        e.preventDefault()

        if(!todo) return
            addTodo({todo, completed : false})
            setTodo('')
        
    }
    return (
        <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value = {todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

