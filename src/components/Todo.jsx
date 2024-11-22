'use client';
import React, { useEffect, useState } from 'react';
import mockTodoData from './data/Tododata';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';

const Todo = () => {
    const [plan, setPlan] = useState(mockTodoData);

    //마운트 시
    useEffect(() => {
        const savedPlan = JSON.parse(localStorage.getItem('plan')) || [];
        setPlan(savedPlan);
    });

    // 업데이트 시
    useEffect(() => {
        localStorage.setItem('plan', JSON.stringify(plan));

        const savedPlan = JSON.parse(localStorage.getItem('plan')) || [];
        setPlan(savedPlan);
    }, [plan]);
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
