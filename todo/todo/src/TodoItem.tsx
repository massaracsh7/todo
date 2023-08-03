import React from 'react';

type Todo = {
  id: number;
  text: string;
  check: boolean;
};

interface Props {
  task: Todo;
  checkTask: (id: Todo['id']) => void;
  deleteTask: (id: Todo['id']) => void;
}

export default function TodoItem({ task, checkTask, deleteTask }: Props) {
  let nameLi = 'todo__item';
  if (task.check) {
    nameLi += ' done';
  }
  return (
    <li className={nameLi}
      onClick={() => checkTask(task.id)}
    >
      <span style={{
        textDecoration: task.check ? 'line-through' : 'none'
      }}
      >
        {task.text}
      </span>
      <button className='btn-delete' onClick={(e) => {
        e.stopPropagation();
        deleteTask(task.id)
      }
      }>X</button>
    </li>
  )
}