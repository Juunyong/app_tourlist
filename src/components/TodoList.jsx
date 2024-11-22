// src/components/TodoList.jsx
import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ plans, onUpdate }) => {
    const [search, setSearch] = useState('');

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredTodo = () => {
        return (plans || []).filter((item) => item.task.toLowerCase().includes(search.toLowerCase()));
    };
    return (
        <div>
            <h2>할 일 목록 📃</h2>
            <input type="search" value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
            <ul>
                {filteredTodo().map((todo) => (
                    <TodoItem key={todo.id} onUpdate={onUpdate} {...todo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
