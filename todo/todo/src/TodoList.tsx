import React from 'react';
import TodoItem from './TodoItem'


type Todo = {
  id: number;
  text: string;
  check: boolean;
}

interface Props {
  tasks: Array<Todo>;
}

export default function TodoList({ tasks }: Props) {
  return (
    <ul className='todo__list'>
      {tasks.map((task) => {
        return (
          <TodoItem task={task}
            key={task.id}
          />
        );
      })}
    </ul>
  );
}