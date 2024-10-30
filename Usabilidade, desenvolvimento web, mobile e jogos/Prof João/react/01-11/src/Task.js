import React from 'react';

function Task({ task, onRemove }) {
    return (
        <div className="task">
            <p>{task}</p>
            <button onClick={onRemove}>Remover</button>
        </div>
    );
}

export default Task;
