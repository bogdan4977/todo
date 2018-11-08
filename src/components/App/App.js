import React, {Component} from 'react';

import {FormTodo, TabsTodo, ListTodo} from '../../components';
import guid from '../../helpers/guid';
import {ALL, DONE, PROCESS} from '../../const/TabsState';

class App extends Component {
    state = {
        value: '',
        filter: 'all',
        itemsTodo: [],
        filteredItemsTodo: [],
    };

    handleChange = ({target}) => {
        const {value} = target; // const value = target.value;
        this.setState({value}); // this.setState({ value: value });
    };

    handleClick = () => {
        const {value, filter} = this.state;
        // создаём объект наших value
        const item = {
            id: guid(),
            value,
            done: false,
        };

        this.setState(
            prevState => ({
                // делаем наш массив иммутабельным и добавляем туда новое значение
                value: '',
                itemsTodo: [...prevState.itemsTodo, item],
                filteredItemsTodo: [...prevState.filteredItemsTodo, item]
            }),
            () => {
                this.selectTab(filter);
            }
        );
    };
    deleteItem = (id) => {
        const {itemsTodo} = this.state;
        const filteredItemsTodo = itemsTodo.map(item => {
            if (item.id === id) {
                return {...item, done: true};
            }
            return item;
        });
        this.setState({
            itemsTodo: filteredItemsTodo,
            filteredItemsTodo: filteredItemsTodo
        });
    };
    selectTab = (type) => {
        if (type === ALL) {
            this.setState((prevState) =>({
                filter: ALL,
                filteredItemsTodo: prevState.itemsTodo,
                activeTabClass: 'active'
            }));
        } else if (type === DONE){
            const filteredItemsTodo = this.state.itemsTodo.filter(item => item.done);

            this.setState({
                filter: DONE,
                filteredItemsTodo: filteredItemsTodo
            });
        } else if (type === PROCESS){
            const filteredItemsTodo = this.state.itemsTodo.filter(item => !item.done);

            this.setState({
                filter: PROCESS,
                filteredItemsTodo: filteredItemsTodo
            });
        } else {
            alert('error!');
        }
    };

    render() {
        // Разворачиваем state
        const {value, filteredItemsTodo, } = this.state;

        return (
            <section className='todo-container'>
                <h1>TODO LIST</h1>
                <TabsTodo
                    selectTab={this.selectTab}
                />
                <FormTodo
                    handleClick={this.handleClick}
                    currentTodo={value}
                    handleChange={this.handleChange}
                />
                <ListTodo
                    itemsTodo={filteredItemsTodo}
                    deleteItem={this.deleteItem}
                />
            </section>
        );
    }
}

export default App;