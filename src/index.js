import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function GenerateTask(props) {

  const listTasks = props.tasks.map((task) => {
    if (task) {
      return (
        <div className='wrp-task' key={task + Math.random()}>
          <li>{task}</li>
          <button className='del-task'>Удалить задачу</button>
        </div>
      );
    }
  });

  return (
    <div className='list-task'>
      {listTasks}
    </div>
  );
}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.additionTask = this.additionTask.bind(this);
    this.state = {
      value: '',
      tasks: [],
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value, });
  }

  additionTask() {
    const task = this.state.value;
    const cloneTasks = this.state.tasks.slice();
    cloneTasks.push(task);

    this.setState({ tasks: cloneTasks, });
  }

  render() {
    return (
      <div className='todo'>
        <label>Создайте задачу:
          <br />
          <input className='create-task' type="text" value={this.state.value} onChange={this.handleChange} />
          <button className='add-task' onClick={this.additionTask}>Добавить</button>
          <hr />
        </label>
        <GenerateTask tasks={this.state.tasks} />
      </div>
    );
  }
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
);


