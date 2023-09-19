import { For } from 'solid-js';
import ListItem from '../ListItem/ListItem';
import styles from './TodosListBox.module.scss';
import { filteredTodos } from '../../store/index';

export default function TodosListBox() {
  return (
    <div class={styles.root}>
      <For each={filteredTodos()}>
        {(todo, index) => <ListItem key={index} todo={todo} index={index} />}
      </For>
    </div>
  );
}
