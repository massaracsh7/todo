import React from 'react';
import Header from './Header';


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

  return (
    <div className="app">
      <Header />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
