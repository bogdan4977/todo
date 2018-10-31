import React, {Component} from 'react';

class FormTodo extends Component {
    render() {
        const {currentTodo, handleClick, handleChange} = this.props;
        return (
            <div className='form-box'>
                <form action="/">
                    <input type='text' value={currentTodo} onChange={handleChange}/>
                    <button type='button' onClick={handleClick}>Add</button>
                </form>
            </div>
        );
    }
}

export default FormTodo;
