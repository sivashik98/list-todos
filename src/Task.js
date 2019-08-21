import React from 'react';
import ListTasks from './ListTasks';

function Task(props) {

  const list = props.tasks.map((task) => {
    return (
      <div className='todo__wrp-task' key={task.id}>
        <label>
          <input name={task.id} type="checkbox" checked={task.isCompleted} onChange={props.handleChangeTask} />
          {task.text}
        </label>
        <button value={task.id} className='todo__del-task' onClick={props.deleteTask} >Удалить задачу</button>
      </div>
    );
  });

  return (
    <ListTasks list={list} />
  );
}

export default Task;
