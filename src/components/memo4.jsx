/* Build a todo list app where the list component is memoized to prevent re-renders 
when the input changes. */
import React, { useState } from 'react';

const TodoItem = React.memo(({ todo }) => {
    console.log(`Rendering todo: ${todo}`);
    return <li>{todo}</li>;
});
export default function MemoizedTodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const addTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue.trim()]);
            setInputValue('');
        }
    };
    return (
        <div className='p-4 rounded shadow-md'>
            <h2>Todo List</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border p-2 rounded-md px-5 mt-2"
            />
            <button className="border bg-gray-400 p-2 rounded-md px-5 mt-2" onClick={addTodo}>Add Todo</button>
            <ul className="mt-4">
                {todos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} />
                ))}
            </ul>
        </div>
    );
}
