import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Task from './Task';


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

  deleteTask(event) {
    const target = event.target.previousElementSibling.innerHTML;
    const tasks = this.state.tasks.filter((task) => task !== target);

    this.setState({ tasks, });
  }

  handleChange({target: {value}}) {
    this.setState({ value, });
  }

  additionTask() {
    if (this.state.value) {
      if (!this.state.tasks.includes(this.state.value))  {
        this.setState({ tasks: [...this.state.tasks, this.state.value], });
      }
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


