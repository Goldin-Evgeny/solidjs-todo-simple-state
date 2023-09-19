import styles from './ActionsBox.module.scss';
import { setBgColor, setFilter, filter } from '../../store/index';

export default function ActionsBox(props) {
  return (
    <div class={styles.root}>
      <div>
        <input type="color" on onInput={(e) => setBgColor(e.target.value)} />
      </div>
      <div>
        <button
          onClick={() => setFilter('All')}
          class={filter() === 'All' ? styles.active : ''}
        >
          All
        </button>
        <button
          onClick={() => setFilter('Active')}
          class={filter() === 'Active' ? styles.active : ''}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('Completed')}
          class={filter() === 'Completed' ? styles.active : ''}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
