import styles from './Forms.module.scss';
import { formData } from "@/constants/form";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type InputListProps<T extends {}> = {
  register: UseFormRegister<T>,
  errors: FieldErrors<Partial<T>>
};

export const InputList = <T extends {}>({ register, errors }: InputListProps<T>) => {
  return (
    <>
      {
        formData.map((item: any, index) => (
          <label key={index} className={styles.label}>
            {item.text ? <span>{item.text}</span> : null}
            <input
              className={styles.input}
              {...register(item.id!, { required: `*Поле ${item.placeholder} обязательно для заполнения` })}
              placeholder={item.placeholder ? item.placeholder : ''}
              type={item.type} />
            {errors[item.id as keyof T] && <span className={styles.error}>{`${errors[item.id as keyof T]?.message}`}</span>}
          </label>
        ))
      }
    </>
  );
};
