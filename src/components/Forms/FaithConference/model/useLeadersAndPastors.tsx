'use client';

import { RootState } from '@/store/store';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { FormFields } from './useFaithConf';
import { fetchPaymentUrl } from '@/utils/register/payment';
import { ChangeEvent, useMemo, useState } from 'react';

const REGISTER_PRICE = 3000;

const PROMOCODE = {
  promoCodedPrice: 1500,
  promocodeText: 'ЛИДЕРЦЕРКВИ',
};

export const useLeadersAndPastors = () => {
  const persons = useSelector(
    (state: RootState) => state.event.registerPersons,
  );
  const router = useRouter();

  const [promoError, setPromoError] = useState<string>('');
  const [isPromoApplied, setIsPromoApplied] = useState<boolean>(false);

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

  const currentPerson = persons[0];

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormFields>({
    mode: 'onBlur',
  });

  const currentPrice = useMemo(() => {
    return isPromoApplied ? PROMOCODE.promoCodedPrice : REGISTER_PRICE;
  }, [isPromoApplied]);

  const onSubmit = async (data: FormFields) => {
    const clientData = {
      ...data,
      eventType: 'faithconf',
      registerType: 'Семинары для пасторов и лидеров',
      price: currentPrice,
    };

    const paymentData = await fetchPaymentUrl(clientData);
    router.push(paymentData.paymentUrl);
  };

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    onSubmit,
    currentPerson,
    currentPrice,
    promoError,
    onPromoChange,
  };
};
