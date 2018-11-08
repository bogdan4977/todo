import React from 'react';
import {string, func} from 'prop-types';

const FormTodo = ({currentTodo, handleChange, handleClick}) => (
    <div className='form-box'>
        <input type='text' value={currentTodo} onChange={handleChange} placeholder={'Add Todo here'}/>
        <button type='button' onClick={handleClick} disabled={!currentTodo.length}>Add Item</button>
    </div>
);

FormTodo.propTypes = {
    currentTodo: string.isRequired,
    handleClick: func.isRequired,
    handleChange: func.isRequired
};

export default FormTodo;
