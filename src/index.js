import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';

import './index.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.deleteTask = this.deleteTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.additionTask = this.additionTask.bind(this);
    this.state = {
      value: '',
      tasks: [],
    };
  }

  deleteTask({target: {value}}) {
    const tasks = this.state.tasks.filter((task, i) => i !== Number(value));

    this.setState({ tasks, });
  }

  handleChange({target: {value}}) {
    this.setState({ value, });
  }

  additionTask() {
    const descTask = this.state.value;

    if (descTask.length > 0) {
      this.setState({ tasks: [...this.state.tasks, descTask], });
    }
  }

  render() {
    return (
      <div className='todo'>
        <label>Создайте задачу:
          <br />
          <input className='todo__create-task' type="text" value={this.state.value} onChange={this.handleChange} />
          <button className='todo__add-task' onClick={this.additionTask}>Добавить</button>
          <hr />
        </label>
        <Task tasks={this.state.tasks} delTask={this.deleteTask} />
      </div>
    );
  }
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
);


