import { InfoItem } from './InfoItem/InfoItem';

import styles from './Info.module.scss';

const data = [{
  id: 0,
  content: 'Учитываются только номера телефонов',
}, {
  id: 1,
  content: 'Номера телефонов должны быть разделены запятыми или большой латинской буквой M',
}, {
  id: 2,
  content: (
    <>
      Номера телефонов должны начинаться с "+7" или "8" и иметь 10 цифр после
      <br />
      (пробелы, тире, скобки и перенос строки не учитываются)
    </>
  ),
}]

export const Info = () => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <InfoItem key={item.id}>
          {item.content}
        </InfoItem>
      ))}
    </ul>
  );
};
