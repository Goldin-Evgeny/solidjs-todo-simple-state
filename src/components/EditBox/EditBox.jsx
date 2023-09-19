import styles from './EditBox.module.scss';
import { newTodo, setNewTodo, todos, setTodos } from '../../store/index';

export default function EditBox() {
  return (
    <div class={styles.root}>
      <input
        type="text"
        value={newTodo()}
        onInput={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={() => {
          const newTodos = [...todos(), { text: newTodo(), completed: false }];
          setTodos(newTodos);
          setNewTodo('');
        }}
      >
        Add
      </button>
    </div>
  );
}
