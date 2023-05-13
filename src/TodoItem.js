import React from 'react';

const TodoItem = ({ todo, handleDelete }) => {
    return (
        <div>
            <span>{todo}</span>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TodoItem;