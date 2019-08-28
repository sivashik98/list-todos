import React from 'react';


function Task(props) {
  const taskStyles = ['todo__wrp-task'];

  if (props.task.isCompleted) {
    taskStyles.push('todo__wrp-task-completed')
  }


  return (
    <div className={taskStyles.join(' ')} key={props.task.id}  >
      <label>
        <input className='todo__task' type="checkbox" checked={props.task.isCompleted} onChange={() => props.handleChangeTask(props.task.id)} />
        {props.task.text}
      </label>
      <button className='todo__del-task' onClick={() => props.deleteTask(props.task.id)} >Удалить задачу</button>
    </div>
  );
}

export default Task;
