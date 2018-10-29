import React, { Component } from 'react';
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
    const { value, values } = this.state;

    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
        {/* мапим элементы массива и задаем каждому элменту уникальный идентификатор */}
        {values.map(item => (
          <p key={item.id}>{item.value}</p>
        ))}
        <h2>Accomplished, {this.user.sername}</h2>
      </div>
    );
  }
}

export default App;