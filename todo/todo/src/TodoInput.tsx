import React from 'react';
type Todo = {
  id: number;
  text: string;
  check: boolean;
};

interface Props {
  addTask: ({ text }: Omit<Todo, 'id' | 'check'>) => void;
}
const todoArray = { text: '' };

export default function TodoInput({ addTask }: Props) {
  const [tasks, setTasks] = React.useState(todoArray);

  const onClick = () => {
    addTask({ text: tasks.text });
    setTasks(todoArray);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTasks({ ...tasks, [name]: value });
  };


  return (
    <div>
      <input
        id='task'
        placeholder='add a new task...'
        value={tasks.text}
        name='text'
        onChange={onChange}
      />
      <button className='btn-add' onClick={onClick}>Add</button>
    </div>
  );
};