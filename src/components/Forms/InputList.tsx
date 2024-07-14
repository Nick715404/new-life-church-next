import styles from './Forms.module.scss';
import { formData } from "@/constants/form"
import { TStandartForm } from '@/interfaces/forms';
import { CustomFormData } from "@/interfaces/utils";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type InputListProps = {
  register: UseFormRegister<TStandartForm>,
  errors: FieldErrors<TStandartForm>
};

export const InputList = ({ register, errors }: InputListProps) => {
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
            {errors[item.id as keyof TStandartForm] && <span className={styles.error}>{`${errors[item.id as keyof TStandartForm]?.message}`}</span>}
          </label>
        ))
      }
    </>
  );
};