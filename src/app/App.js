import React from "react";
import ListTasks from "../list-tasks/ListTasks";
import '../index.css'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      tasks: [],
    };
  }

  handleChange = ({target: { value, }}) => {
    this.setState({ value, });
  };

  addTask = () => {
    const {value} = this.state;

    if (value.trim().length > 0) {
      this.setState(state => ({ tasks: [{ text: value, id: Math.random(), isCompleted: false, }, ...state.tasks], }));
    }
  };

  deleteTask = (id) => {
    const tasks = [...this.state.tasks].filter(task => task.id !== id);

    this.setState({ tasks, });
  };

  handleChangeTask = (id) => {
    const tasks = [...this.state.tasks].map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });

    this.setState({ tasks, });
  };

  deleteCompletedTasks = () => {
    const tasks = [...this.state.tasks].filter(task => !task.isCompleted);

    this.setState({ tasks, });
  };

  deleteAllTasks = () => {
    this.setState({ tasks: [], })
  };


  render() {
    const isTasks = this.state.tasks.length > 0 ? <ListTasks tasks={this.state.tasks} deleteTask={this.deleteTask} handleChangeTask={this.handleChangeTask} /> : null;

    return (
      <div className='todo'>
        <label>Создайте задачу:
          <div className='todo__core-tools'>
            <input className='todo__create-task' type="text" value={this.state.value} onChange={this.handleChange} />
            <button className='todo__add-task' onClick={this.addTask}>Добавить</button>
            <button className='todo__del-all-completed-task' onClick={this.deleteCompletedTasks}>Удалить выполненные</button>
            <button className='todo__del-all-task' onClick={this.deleteAllTasks}>Очистить список задач</button>
          </div>
          <hr />
        </label>
        {isTasks}
      </div>
    );
  }
}

export default App;
