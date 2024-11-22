'use client';
import React, { useState } from 'react';
import mockTodoData from './data/Tododata';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';

const Todo = () => {
    const [plan, setPlan] = useState(mockTodoData);

    //할 일 추가하는 함수
    const addTodo = (task) => {
        const newTodo = {
            id: plan.length + 1,
            isDone: false,
            task: task,
            createDate: new Date().toLocaleDateString(),
        };
        setPlan([newTodo, ...plan]);
    };

    const onDelete = () => {
        setPlan();
    };

    //완료 표시 함수
    const onUpdate = (id) => {
        setPlan(plan.map((plan) => (plan.id === id ? { ...plan, isDone: !todo.isDone } : todo)));
    };

    return (
        <div>
            <TodoHd />
            <TodoEditor addTodo={addTodo} />
            <TodoList plan={plan} onUpdate={onUpdate} />
        </div>
    );
};

export default Todo;
