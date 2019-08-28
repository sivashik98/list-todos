import React from 'react';
import Task from '../task/Task';


function ListTasks(props) {

  const tasks = props.tasks.map((task) => <Task key={task.id} task={task} deleteTask={props.deleteTask} handleChangeTask={props.handleChangeTask} />);

  return (
    <div className='todo__list-task'>
      {tasks}
    </div>
  );
}

export default ListTasks;
