'use client';
import React, { useState } from 'react';
import mockTodoData from './data/Tododata';

const Todo = () => {
    const [plan, setPlan] = useState(mockTodoData);
    return (
        <div>
            <h2>새로운 todo 작성하기 </h2>
            <p>to do</p>
            <ul>
                <li>
                    <input type="checkbox" />
                    <strong>일어나기</strong>
                    <span>2024.02.25</span>
                </li>
            </ul>
        </div>
    );
};

export default Todo;
