import React from 'react';
import ListTasks from './ListTasks';

function Task(props) {

  const list = props.tasks.map((task, i) => {
    return (
      <div className='todo__wrp-task' key={i}>
        <li>{task}</li>
        <button value={i} className='todo__del-task' onClick={props.delTask} >Удалить задачу</button>
      </div>
    );
  });

  return (
    <ListTasks list={list} />
  );
}

export default Task;
