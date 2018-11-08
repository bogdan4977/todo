import React from 'react';
import PropTypes from 'prop-types';

import ListItemTodo from '../ListItemTodo/ListItemTodo';
// import { ItemType } from '../../types/TodoItem';

const {arrayOf, func, shape, string, bool} = PropTypes;

function ListTodo({itemsTodo, deleteItem}) {
    return (
        <ol className='todo-list'>
            {itemsTodo.map((itemTodo) => (
                <ListItemTodo key={itemTodo.id} {...itemTodo} deleteItem={deleteItem}/>
            ))}
        </ol>
    );
}

ListTodo.propTypes = {
    itemsTodo: arrayOf(
        shape({
            id: string.isRequired,
            value: string.isRequired,
            done: bool.isRequired,
        })
    ),
    deleteItem: func.isRequired
};

export default ListTodo;
