import {
  SyntheticEvent,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';

import { sendPhones } from '../../services/api';
import { checkPhones } from '../../utils/checkPhones';
import { TextArea } from '../TextArea/TextArea';
import { Button } from '../Button/Button';

import styles from './Form.module.scss';

type FormData = {
  phones: string;
};

export const Form = () => {
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const formDataRef = useRef<FormData>({ phones: '' });

  const handleTextAreaChange = (value: string) => {
    formDataRef.current.phones = value;
    setIsValid(checkPhones(value));
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    setLoading(true);

    try {
      const result = await sendPhones(formDataRef.current);
      const url = window.URL.createObjectURL(result);
      const link = document.createElement('a');

      link.style.display = 'none';
      link.href = url;
      link.download = 'phones.xlsx';

      document.body.appendChild(link);

      link.click();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      setError(`Произошла ошибка: ${error.message || ''}`);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <TextArea
        id="phones"
        name="phones"
        placeholder="Введите номера телефонов"
        onChange={handleTextAreaChange}
      />

      {error && (
        <div className={styles.error}>
          {error}
        </div>
      )}

      <div className={styles.buttonWrapper}>
        <Button
          type="submit"
          className={cn({
            [styles.buttonLoading]: loading,
          })}
          disabled={!isValid || loading}
        >
          Сгенерировать excel
        </Button>
      </div>
    </form>
  );
};
