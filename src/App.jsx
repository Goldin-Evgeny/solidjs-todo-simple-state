import { createSignal, createMemo } from 'solid-js';
import MainBox from './components/MainBox/MainBox';
import styles from './App.module.scss';

export default function App() {
  return (
    <div class={styles.root}>
      <MainBox />
    </div>
  );
}
