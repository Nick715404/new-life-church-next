import { FormFields } from './types';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useChelFireContext } from '@/providers';
import { fetchPaymentUrl } from '@/utils/register/payment';
import { useForm } from 'react-hook-form';
import { ChangeEvent, useMemo, useState } from 'react';

export const PROMOCODE = {
  promoCodedPrice: 500,
  promocodeText: 'ВОЛОНТЕРТИНС',
};

export const useChelFire = () => {
  const [promoError, setPromoError] = useState<string>('');
  const [isPromoApplied, setIsPromoApplied] = useState<boolean>(false);

  const { formType } = useChelFireContext();
  const router = useRouter();
  const persons = useSelector(
    (state: RootState) => state.event.registerPersons,
  );

  const currentPerson = persons.find(
    (person) => person.attributes.person_type === formType,
  );

  const price = currentPerson?.attributes.init_price ?? 1000;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormFields>({
    mode: 'onBlur',
  });

  const onPromoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim().toUpperCase();

    if (value === '') {
      setPromoError('');
      setIsPromoApplied(false);
    } else if (value === PROMOCODE.promocodeText) {
      setPromoError('');
      setIsPromoApplied(true);
    } else {
      setPromoError('Неверный промокод');
      setIsPromoApplied(false);
    }
  };

  const currentPrice = useMemo(() => {
    return isPromoApplied ? PROMOCODE.promoCodedPrice : price;
  }, [isPromoApplied, price]);

  const onSubmit = async (data: FormFields) => {
    const clientData = {
      ...data,
      homeCover: data.homeCover ? 'Нужно расселение' : '',
      eventType: 'chelfire',
      personType: currentPerson?.attributes.person_type,
      price: currentPrice,
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
    currentPrice,
    onPromoChange,
    promoError,
  };
};
