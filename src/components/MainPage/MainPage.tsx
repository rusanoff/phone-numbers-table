import { Header } from '../Header/Header';
import { Form } from '../Form/Form';
import { Info } from '../Info/Info';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <main className={styles.main}>
      <Header
        title={(
          <>
            Генератор <span className={styles.green}>excel</span> таблицы номеров телефонов
          </>
        )}
      />

      <Info />

      <Form />
    </main>
  );
};
