import { For } from 'solid-js';
import ListItem from '../ListItem/ListItem';
import styles from './TodosListBox.module.scss';

export default function TodosListBox(props) {
  return (
    <div class={styles.root}>
      <For each={props.todos()}>
        {(todo, index) => (
          <ListItem
            key={index}
            todo={todo}
            index={index}
            setTodos={props.setTodos}
            todos={props.todos}
          />
        )}
      </For>
    </div>
  );
}
