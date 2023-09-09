import styles from './EditBox.module.scss';

export default function EditBox(props) {
  return (
    <div class={styles.root}>
      <input
        type="text"
        value={props.newTodo()}
        onInput={(e) => props.setNewTodo(e.target.value)}
      />
      <button
        onClick={() => {
          const newTodos = [
            ...props.todos(),
            { text: props.newTodo(), completed: false },
          ];
          props.setTodos(newTodos);
          props.setNewTodo('');
        }}
      >
        Add
      </button>
    </div>
  );
}
