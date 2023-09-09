import ActionsBox from '../ActionsBox/ActionsBox';
import TodosListBox from '../TodosListBox/TodosListBox';
import EditBox from '../EditBox/EditBox';
import styles from './MainBox.module.scss';

export default function MainBox(props) {
  return (
    <div class={styles.root}>
      <ActionsBox
        setFilter={props.setFilter}
        setBgColor={props.setBgColor}
        filter={props.filter}
        bgColor={props.bgColor}
      />
      <TodosListBox todos={props.todos} setTodos={props.setTodos} />
      <EditBox
        todos={props.todos}
        newTodo={props.newTodo}
        setNewTodo={props.setNewTodo}
        setTodos={props.setTodos}
      />
    </div>
  );
}