import React, { useCallback, useMemo, useState } from 'react';
import TodoItem from './TodoItem';
import { set } from 'date-fns';
import { useTodo } from '@/contexts/TodoContext';

const TodoList = () => {
    const [search, setSearch] = useState('');
    const { onUpdate, onDelete, todos } = useTodo();

    const filteredTodos = () => {
        return todos.filter((item) => item.task.toLowerCase().includes(search.toLowerCase()));
    };

    const lookback = useMemo(() => {
        console.log('lb');
        const total = todos.length;
        const done = todos.filter((todo) => todo.isDone).length;
        const left = total - done;
        return { total, done, left };
    }, [todos]);

    const handleUpdate = useCallback(
        (id) => {
            return onUpdate(id);
        },
        [onUpdate]
    );
    const handleDelete = useCallback(
        (id) => {
            return onDelete(id);
        },
        [onUpdate]
    );
    return (
        <div>
            <h2>할 일 목록</h2>
            <hr></hr>
            <div>
                {lookback.total}중 {lookback.done}완료. {lookback.left}개 남음.
            </div>
            <input
                type="search"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                placeholder="검색어를 입력하세요."
                className="p-3 text-black w-full"
            />
            <ul className="mt-5 flex flex-col gap-2 divide-y">
                {filteredTodos().map(
                    (item) => (
                        console.log(item),
                        (
                            <TodoItem
                                key={item.id}
                                {...item}
                                onUpdate={() => handleUpdate(item.id)}
                                onDelete={() => handleDelete(item.id)}
                            />
                        )
                    )
                )}
            </ul>
        </div>
    );
};

export default TodoList;
