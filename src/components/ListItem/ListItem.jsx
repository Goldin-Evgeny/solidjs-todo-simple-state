import styles from './ListItem.module.scss';
import { todos, setTodos } from '../../store/index';

export default function ListItem(props) {
  return (
    <div class={styles.root}>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => {
          const newTodos = [...todos()];
          newTodos[props.index()].completed =
            !newTodos[props.index()].completed;
          setTodos(newTodos);
        }}
      />
      <span>{props.todo.text}</span>
    </div>
  );
}
