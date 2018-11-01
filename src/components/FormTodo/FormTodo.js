import React, {Component} from 'react';
import PropTypes from 'prop-types';

const {string, func} = PropTypes;
class FormTodo extends Component {
    render() {
        const {currentTodo, handleClick, handleChange} = this.props;
        return (
            <div className='form-box'>
                <form action="">
                    <input type='text' value={currentTodo} onChange={handleChange}/>
                    <button type='button' onClick={handleClick}>Add</button>
                </form>
            </div>
        );
    }
}

FormTodo.propTypes = {
    currentTodo: string,
    handleClick: func,
    handleChange: func
};

export default FormTodo;
