import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';

import './index.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.deleteCompletedTask = this.deleteCompletedTask.bind(this);
    this.handleChangeTask = this.handleChangeTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.additionTask = this.additionTask.bind(this);
    this.state = {
      value: '',
      tasks: [],
    };
  }

  deleteCompletedTask() {
    const tasks = this.state.tasks.filter(task => !task.isCompleted);

    this.setState({ tasks, })
  }

  handleChangeTask({ target, }) {
    const tasks = this.state.tasks.map((task) => {
      if (task.id === Number(target.name)) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });

    this.setState({ tasks, });

  }

  deleteTask({target: { value, }}) {
    const tasks = this.state.tasks.filter(task => task.id !== Number(value));

    this.setState({ tasks, });
  }

  handleChange({target: { value, }}) {

    this.setState({ value, });
  }

  additionTask() {
    const text = this.state.value;

    if (text.length > 0) {
      this.setState(state => ({ tasks: [...state.tasks, { text, id: Math.random(), isCompleted: false, }], }));
    }
  }

  render() {
    let hasTasks;

    if (this.state.tasks.length > 0) {
      hasTasks = <Task tasks={this.state.tasks} deleteTask={this.deleteTask} handleChangeTask={this.handleChangeTask} />;
    }

    return (
      <div className='todo'>
        <label>Создайте задачу:
          <br />
          <input name='create-task' className='todo__create-task' type="text" value={this.state.value} onChange={this.handleChange} />
          <button className='todo__add-task' onClick={this.additionTask}>Добавить</button>
          <button className='todo__del-all-task' onClick={this.deleteCompletedTask}>Удалить выполненные</button>
          <hr />
        </label>
        {hasTasks}
      </div>
    );
  }
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
);


