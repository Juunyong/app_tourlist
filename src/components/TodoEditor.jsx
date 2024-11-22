import React, { useRef, useState } from 'react';

const TodoEditor = ({ addTodo }) => {
    const [task, setTask] = useState('');

    const onChangeTask = (e) => setTask(e.target.value);

    const inputRef = useRef();

    const onSubmit = () => {
        if (!task) return;
        addTodo(task);

        setTask('');
        inputRef.current.focus();
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') onSubmit();
        if (e.key === 'Escape') {
            setTask;
        }
    };
    return (
        <div>
            <h2>새로운 Todo 작성하기 !!</h2>
            <div>
                <input type="text" value={task} onChange={onChangeTask} placeholder="할일 입력하기" ref={inputRef} />
                <button type="submit" onClick={onSubmit} onKeyDown={onKeyDown}>
                    추가
                </button>
            </div>
        </div>
    );
};

export default TodoEditor;
