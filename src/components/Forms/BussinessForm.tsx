import { StandartForm } from "./StandartForm";
import { useEventsForms } from "./useEventsForms";

type BussinessFormProps = { slug: string, };

export function BussinessForm({ slug }: BussinessFormProps) {
  const {register } = useEventsForms({ slug: slug });

  return (
    <StandartForm slug={slug}>
      <input {...register('occupation')} type="text" />
    </StandartForm>
  );
};