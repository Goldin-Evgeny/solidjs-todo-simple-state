import { createSignal, createMemo } from 'solid-js';
import MainBox from './components/MainBox/MainBox';
import styles from './App.module.scss';

export default function App() {
  const [todos, setTodos] = createSignal([]);
  const [filter, setFilter] = createSignal('All');
  const [newTodo, setNewTodo] = createSignal('');
  const [bgColor, setBgColor] = createSignal('#000000');

  const filteredTodos = createMemo(() => {
    if (filter() === 'All') return todos();
    if (filter() === 'Active') return todos().filter((todo) => !todo.completed);
    if (filter() === 'Completed')
      return todos().filter((todo) => todo.completed);
    return [];
  });

  return (
    <div class={styles.root}>
      <MainBox
        todos={filteredTodos}
        filter={filter}
        newTodo={newTodo}
        bgColor={bgColor}
        setFilter={setFilter}
        setNewTodo={setNewTodo}
        setBgColor={setBgColor}
        setTodos={setTodos}
      />
    </div>
  );
}
