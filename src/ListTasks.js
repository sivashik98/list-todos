import React from 'react';

function ListTasks(props) {

  return (
    <div className='todo__list-task'>
      {props.list}
    </div>
  );
}

export default ListTasks;
