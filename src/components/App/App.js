import React, {Component} from 'react';
import {FormTodo, TabsTodo, ListTodo} from '../../components';
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
                <h1>TODO LIST</h1>
                <TabsTodo/>
                <FormTodo
                    currentTodo={value}
                    handleClick={this.handleClick}
                    handleChange={this.handleChange}
                />
                <ListTodo/>
            </section>
        );
    }
}

export default App;