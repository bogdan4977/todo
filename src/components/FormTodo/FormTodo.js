import React from 'react';
import {string, func} from 'prop-types';

const FormTodo = ({currentTodo, handleChange, handleClick}) => (
    <div className='form-box'>
        <input type='text' value={currentTodo} onChange={handleChange}/>
        <button type='button' onClick={handleClick}>Add item</button>
    </div>
);

FormTodo.propTypes = {
    currentTodo: string,
    handleClick: func,
    handleChange: func
};

export default FormTodo;
