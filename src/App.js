import styles from './app.module.css';
import { SelectComponent } from './components/SelectComponent';
import { UseFormComponent } from './components/UseFormComponent';
import { UseRefComponent } from './components/UseRefComponent';

export const App = () => {
  return (
    <div className={styles.App}>
      <SelectComponent />
      <UseRefComponent />
      <UseFormComponent />
    </div>
  );
};
