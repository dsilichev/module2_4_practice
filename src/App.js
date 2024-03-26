import styles from './app.module.css';
import { SelectComponent } from './components/Select'

export const App = () => {
  return (
    <div className={styles.App}>
      <SelectComponent />
    </div>
  );
};
