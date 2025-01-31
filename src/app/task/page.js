'use client'
import { useState } from "react";

// export default function Home() {
//     const [counter, setCounter] = useState(0);
//     function add() {
//        setCounter(counter + 1);
//     }
//     function sub() {
//         setCounter(counter - 1);
//      }
//     return (
//         <div id="container">
//             <div>{counter}</div>
//             <button onClick={add}>Add</button>
//             <button onClick={sub}>Sub</button>
//         </div>
//     );
// }



export default function Home() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = () => {
        const arr = [...todos];
    arr.push({ title : "Hicheel zaah"});
    setTodos(arr);
    }

    const removeTodo = () => {
   todos.filter()
    }
    return (
        <div>
            <h1>To Do List</h1>
            <button onClick={addTodo}>Add todo</button>
            {todos.map((todo) => (
                <div>
                    <div>{todo.title}</div>
                    <button onClick={removeTodo}>x</button>
                </div>
            ))}
        </div>
    );
}