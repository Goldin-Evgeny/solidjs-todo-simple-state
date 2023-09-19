import { createSignal, createMemo } from 'solid-js';

export const [todos, setTodos] = createSignal([]);
export const [filter, setFilter] = createSignal('All');
export const [newTodo, setNewTodo] = createSignal('');
export const [bgColor, setBgColor] = createSignal('#000000');
export const filteredTodos = createMemo(() => {
  if (filter() === 'All') return todos();
  if (filter() === 'Active') return todos().filter((todo) => !todo.completed);
  if (filter() === 'Completed') return todos().filter((todo) => todo.completed);
  return [];
});
