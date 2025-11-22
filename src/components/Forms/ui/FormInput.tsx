import { InputHTMLAttributes } from 'react';
import {
  FieldErrors,
  UseFormRegister,
  Path,
  FieldValues,
} from 'react-hook-form';

import styles from '../model/styles.module.scss';

type FormInputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  isFree?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const FormInput = <T extends FieldValues>(props: FormInputProps<T>) => {
  const { label, name, register, errors, isFree, ...rest } = props;
  const errorMessage = errors?.[name]?.message as string | undefined;

  const getValidationRules = () => {
    const rules: any = {
      required: isFree ? false : `Поле ${label} должно быть заполнено`,
    };

    if (props.type === 'email') {
      rules.validate = (value: string) => {
        if (/[A-Z]/.test(value)) {
          return 'Email не должен содержать заглавные буквы';
        }

        return EMAIL_REGEX.test(value) || 'Введите корректный email';
      };
    }

    return rules;
  };

  return (
    <label htmlFor={name} className={styles.label}>
      <span className={styles.text}>{label}</span>
      <input
        id={name}
        {...register(name, getValidationRules())}
        {...rest}
        className={styles.input}
      />
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </label>
  );
};
