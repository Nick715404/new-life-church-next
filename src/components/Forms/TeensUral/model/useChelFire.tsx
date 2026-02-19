import { FormFields } from './types';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useChelFireContext } from '@/providers';
import { fetchPaymentUrl } from '@/utils/register/payment';
import { useForm } from 'react-hook-form';

export const useChelFire = () => {
  const { formType } = useChelFireContext();
  const router = useRouter();
  const persons = useSelector(
    (state: RootState) => state.event.registerPersons,
  );

  const currentPerson = persons.find(
    (person) => person.attributes.person_type === formType,
  );

  const price = currentPerson?.attributes.init_price;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormFields>({
    mode: 'onBlur',
  });

  const onSubmit = async (data: FormFields) => {
    const clientData = {
      ...data,
      homeCover: data.homeCover ? 'Нужно расселение' : '',
      eventType: 'chelfire',
      personType: currentPerson?.attributes.person_type,
      price: price,
    };

    const paymentData = await fetchPaymentUrl(clientData);
    router.push(paymentData.paymentUrl);
  };
  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    isValid,
    formType,
    currentPerson,
  };
};
