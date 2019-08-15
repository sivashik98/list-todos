import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function GenerateTask() {
  return (
    <div className='list-task'>

    </div>
  );
}


class App extends React.Component {

  additionTask() {
    const value = document.querySelector('.create-task').value;
    const list = document.querySelector('.list-task');
    const task = document.createElement('li');
    const btnDelTask = document.createElement('button');
    const wrpTask = document.createElement('div');

    wrpTask.setAttribute('class', 'wrp-task');
    btnDelTask.setAttribute('class', 'del-task');
    btnDelTask.innerText = 'X';
    task.innerText = value;

    btnDelTask.addEventListener('click', function () {
      this.parentElement.remove();
    });

    list.appendChild(wrpTask);
    wrpTask.appendChild(task);
    wrpTask.appendChild(btnDelTask);
  }

  render() {
    return (
      <div className='todo'>
        <label>Создайте задачу:
          <br />
          <input className='create-task' type="text"/>
          <button className='add-task' onClick={() => this.additionTask()}>Добавить</button>
          <hr />
        </label>
        <GenerateTask />
      </div>
    );
  }
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
);



