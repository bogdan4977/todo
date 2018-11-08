import React from 'react';
import PropTypes from 'prop-types';

const {string, func, bool} = PropTypes;
function ListItemTodo({deleteItem, id, value, done}) {
    return (
        <li className={done ? 'done' : 'progress'}
            onClick={() => {
                deleteItem(id);
            }}>
            {value}
        </li>
    );
}

ListItemTodo.propTypes = {
    deleteItem: func.isRequired,
    id: string.isRequired,
    value: string.isRequired,
    done: bool.isRequired
};

export default ListItemTodo;
