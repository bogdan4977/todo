import React from 'react';
import PropTypes from 'prop-types';

import ListItemTodo from '../ListItemTodo/ListItemTodo';

function ListTodo(props) {
    return (
        <ul>
            <ListItemTodo/>
        </ul>
    );
}

ListTodo.propTypes = {};
ListTodo.defaultProps = {};

export default ListTodo;
