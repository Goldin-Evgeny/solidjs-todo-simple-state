import styles from './ActionsBox.module.scss';

export default function ActionsBox(props) {
  return (
    <div class={styles.root}>
      <div>
        <input
          type="color"
          on
          onInput={(e) => props.setBgColor(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() => props.setFilter('All')}
          class={props.filter() === 'All' ? styles.active : ''}
        >
          All
        </button>
        <button
          onClick={() => props.setFilter('Active')}
          class={props.filter() === 'Active' ? styles.active : ''}
        >
          Active
        </button>
        <button
          onClick={() => props.setFilter('Completed')}
          class={props.filter() === 'Completed' ? styles.active : ''}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
