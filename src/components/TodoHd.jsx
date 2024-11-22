import { format } from 'date-fns';
import React from 'react';

const TodoHd = () => {
    return (
        <div>
            <h1>준용이의 Todo List</h1>
            <strong>{format(new Date(), 'yyyy.MM.dd')}</strong>
        </div>
    );
};

export default TodoHd;
