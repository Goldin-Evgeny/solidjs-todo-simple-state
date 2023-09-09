import styles from './ListItem.module.scss';

export default function ListItem(props) {
  return (
    <div class={styles.root}>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => {
          const newTodos = [...props.todos()];
          newTodos[props.index()].completed =
            !newTodos[props.index()].completed;
          props.setTodos(newTodos);
        }}
      />
      <span>{props.todo.text}</span>
    </div>
  );
}
