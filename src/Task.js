import React from 'react';

function Task(props) {

  const listTasks = props.tasks.map((task) => {
    return (
      <div className='todo__wrp-task' key={task + Math.random()}>
        <li>{task}</li>
        <button className='todo__del-task' onClick={props.delTask} >Удалить задачу</button>
      </div>
    );
  });

  return (
    <div className='todo__list-task'>
      {listTasks}
    </div>
  );
}

export default Task;
