import React from 'react';
import TodoItem from './TodoItem'


type Todo = {
  id: number;
  text: string;
  check: boolean;
}

interface Props {
  tasks: Array<Todo>;
  checkTask: (id: Todo['id']) => void;
  deleteTask: (id: Todo['id']) => void;
}

export default function TodoList({ tasks, checkTask, deleteTask }: Props) {
  return (
    <ul className='todo__list'>
      {tasks.map((task) => {
        return (
          <TodoItem task={task}
            key={task.id}
            checkTask={checkTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </ul>
  );
}