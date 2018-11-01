import React, {Component} from 'react';
import {FormTodo} from '../../components';
import guid from '../../helpers/guid';

class App extends Component {
    state = {
        value: '',
        values: [],
        statusClass: 'todo'
    };

    handleChange = ({target}) => {
        const {value} = target; // const value = target.value;
        this.setState({value}); // this.setState({ value: value });
    };

    handleItemClick = () => {
        const doneClass = 'done';
        this.setState({statusClass: doneClass});
    };

    handleClick = () => {
        const {value} = this.state;
        // создаём объект наших value
        const item = {id: guid(), value};

        this.setState(prevState => ({
            // делаем наш массив иммутабельным и добавляем туда новое значение
            values: [...prevState.values, item],
            value: '',
        }));
    };

    render() {
        // Разворачиваем state
        const {value, values, statusClass} = this.state;

        return (
            <section className='todo-container'>
                <FormTodo
                    currentTodo={value}
                    handleClick={this.handleClick}
                    handleChange={this.handleChange}
                />
                {/* мапим элементы массива и задаем каждому элменту уникальный идентификатор */}
                <ol className='todo-list'>
                    {values.map((item, index) => (
                        <li key={item.id} className={statusClass} onClick={this.handleItemClick}>{item.value}</li>
                    ))}
                </ol>
            </section>
        );
    }
}

export default App;