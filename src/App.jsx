import { useEffect, useState } from 'react'
import './App.css';
import { TodoProvider } from './context';
import { TodoForm } from './components';
import TodoItem from './components/TodoItems';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => { //todo data comes from here Todo form goes here
    setTodos((prev)=> [{id:Date.now(), ...todo}, ...prev]);//get all previous todos using setTodos((prev)
  }

  const updatedTodo = (id,todo) => {//every todo is an object & every today with id will be coming from here
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))//prevTodo is individual todo
    //(prevTodo.id === id ? todo : prevTodo) is returning -> callback 
  }

  const deleteTodo = (id) => { // create new array such that we shall have all values rether than id 
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
     console.log(id);
    setTodos((prev) => prev.map((todo) => (todo.id === id ? {...todo, completed: !todo.completed} : todo)))
  }//...todo, completed: means if it gets the todo id then get all the data(object) and change the complete value onluy rest will remain same
//////// context concepts over

  ////////////////////////// starting witn local storage 
  //get all todo data from db 
  useEffect(() => {
    // localStorage.getItem('todos', JSON.stringify(todos))
    const todos = JSON.parse(localStorage.getItem('todos'))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])
  // const todos = JSON.parse(localStorage.getItem('todos'))-----------> used in video to convert data in the json format


  //////// add all data to local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])
  //JSON.stringify converts everything into string
  ////////////////////////////
  return (
    <TodoProvider value={{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
      <div className="bg-blue-500 text-white p-4 text-center">
      <h1 className="text-3xl font-bold">Hello, Tailwind CSS in React!</h1>
    </div>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          {/* Todo form goes here */} 
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {/*Loop and Add TodoItem here */}
          {todos.map((todo) => (
            <div key={todo.id} className='w-full'>
              <TodoItem todo={todo}/>
            </div>
          ))}
        </div>
      </div>
    </div>
    </TodoProvider>
  )
}

export default App
