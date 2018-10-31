import React, {Component} from 'react';
import {FormTodo} from './components';
import guid from './helpers/guid';

class App extends Component {
    state = {
        value: '',
        values: [],
    };

    // handleChange = event => {
    //   const {
    //     target: { value },
    //   } = event;
    // };
    user = {
        name: '',
        sername: ''
    };

    handleChange = ({ target }) => {
        const { value } = target; // const value = target.value;
        this.setState({ value }); // this.setState({ value: value });
    };

    handleClick = () => {
        const { value } = this.state;
        // создаём объект наших value
        const item = { id: guid(), value };

        this.setState(prevState => ({
            // делаем наш массив иммутабельным и добавляем туда новое значение
            values: [...prevState.values, item],
            value: '',
        }));
    };

    render() {
        // Разворачиваем state
        const {value, values} = this.state;

        return (
            <section className='todo-container'>
                <FormTodo
                    currentTodo={value}
                    handleClick={this.handleClick}
                    handleChange={this.handleChange}
                />
                {/* мапим элементы массива и задаем каждому элменту уникальный идентификатор */}
                {values.map(item => (
                    <p key={item.id}>{item.value}</p>
                ))}
            </section>
        );
    }
}

export default App;