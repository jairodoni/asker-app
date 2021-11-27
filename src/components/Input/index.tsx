import { Field } from 'formik';
import styles from './styles.module.css';

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
}

export function InputComponent({ placeholder, type, name }: InputProps) {
  return (
    <Field
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      className={styles.imput}
    />
  );
}
