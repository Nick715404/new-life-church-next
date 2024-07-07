import { StandartForm } from "./StandartForm";
import { useForms } from "./useForms";

type BussinessFormProps = { slug: string, };

export function BussinessForm({ slug }: BussinessFormProps) {
  const {register } = useForms({ slug: slug });

  return (
    <StandartForm slug={slug}>
      <input {...register('occupation')} type="text" />
    </StandartForm>
  );
};