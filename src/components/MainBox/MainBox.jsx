import ActionsBox from '../ActionsBox/ActionsBox';
import TodosListBox from '../TodosListBox/TodosListBox';
import EditBox from '../EditBox/EditBox';
import styles from './MainBox.module.scss';
import { bgColor } from '../../store/index';

export default function MainBox() {
  return (
    <div class={styles.root} style={{ 'background-color': bgColor() }}>
      <ActionsBox />
      <TodosListBox />
      <EditBox />
    </div>
  );
}
