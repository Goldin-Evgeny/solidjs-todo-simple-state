import styles from './ActionsBox.module.scss';

export default function ActionsBox(props) {
  console.log(props.bgColor());
  return (
    <div class={styles.root}>
      <div>
        <input
          type="color"
          onChange={(e) => {
            props.setBgColor(e.target.value);
          }}
          value={props.bgColor()}
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
