import styles from './ContactsForm.module.scss';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface IErrorMessageProps {
  message?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const ErrorMessage = ({ message }: IErrorMessageProps) => {
  if (!message) {
    return (
      <div></div>
    )
  };

  return (
    <div className={styles.errorBox}>
      <p className={styles.error}>{`${message}`}</p>
    </div>
  );
};

export { ErrorMessage };
