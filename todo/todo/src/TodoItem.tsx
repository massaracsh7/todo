import React from 'react';

type Todo = {
  id: number;
  text: string;
  check: boolean;
};

interface Props {
  task: Todo;
}

export default function TodoItem({ task }: Props) {
  let nameLi = 'todo__item';
  if (task.check) {
    nameLi += ' done';
  }
  return (
    <li className={nameLi}
    >
      <span style={{
        textDecoration: task.check ? 'line-through' : 'none'
      }}
      >
        {task.text}
      </span>

    </li>
  )
}