import { createContext, useContext } from "react";

export const TodoContext = createContext({
    //we have created an array, each todo will be an object
    //every todo will have a unique id , title ,toggle( check uncheck)
    todos: [ // here todos: are properties, we will be giving basic values from here & functionality will be given from any component eg App.jsx
        {
            id:1,
            todo : 'to message1',
            completed: false,
        },
        {
            id:2,
            todo : 'to message',
            completed: false,
        }// by default it the arrays are empty
    ],
    //adding functionality
    addTodo : (todo) => {},
    toggleComplete : (id) => {},
    deleteTodo : (id) => {},
    updatedTodo : (id,todo) => {}
});
//provide default value


export const useTodo = () => 
{
    return useContext(TodoContext);//remember while using we need to use or specify the name of the context
}

export const TodoProvider = TodoContext.Provider