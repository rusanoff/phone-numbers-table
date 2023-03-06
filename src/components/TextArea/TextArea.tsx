import {
  ChangeEvent,
  DetailedHTMLProps,
  TextareaHTMLAttributes,
  useState,
} from 'react';

import styles from './TextArea.module.scss';

type TextAreaDefaultProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

type TextAreaProps = {
  onChange: (value: string) => void;
} & Pick<TextAreaDefaultProps, 'name' | 'id' | 'placeholder'>;

export const TextArea = (props: TextAreaProps) => {
  const {
    id,
    name,
    placeholder,
    onChange,
  } = props;

  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    setValue(value);
    onChange(value);
  };

  return (
    <div className={styles.wrapper}>
      <textarea
        className={styles.textarea}
        value={value}
        placeholder={placeholder}
        name={name}
        id={id}
        rows={20}
        onChange={handleChange}
      />
    </div>
  );
};
