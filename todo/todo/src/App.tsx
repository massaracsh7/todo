import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

const todoArray = [
  { id: 1, text: 'Go shopping', check: false },
  { id: 2, text: 'learn react', check: true },
  { id: 3, text: 'buy flowers', check: true },
];

type Todo = {
  id: number;
  text: string;
  check: boolean;
};

function App() {
  const [tasks, setTasks] = React.useState(todoArray);

  const addTask = ({ text }: Omit<Todo, 'id' | 'check'>) => {
    setTasks([...tasks, { id: tasks[tasks.length - 1].id + 1, text, check: false }])
  };

  const checkTask = (id: Todo['id']) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, check: !task.check };
        }
        return task;
      })
    );
  };

  const deleteTask = (id: Todo['id']) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="app">
      <Header />
      <TodoList tasks={tasks}
        checkTask={checkTask}
        deleteTask={deleteTask}
      />
      <TodoInput addTask={addTask} />
    </div>
  );
}

export default App;
