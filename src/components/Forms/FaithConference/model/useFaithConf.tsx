'use client';

import { RootState } from '@/store/store';
import { fetchPaymentUrl } from '@/utils/register/payment';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

export type FormFields = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  church: string;
  city: string;
  role: string;
  promocode: string;
};

const PROMOCODE = {
  promoCodedPrice: 100,
  promocodeText: 'ВОЛОНТЕР',
};

export const useFaithConf = () => {
  const persons = useSelector(
    (state: RootState) => state.event.registerPersons,
  );
  const router = useRouter();
  const [promoError, setPromoError] = useState<string>('');
  const [isPromoApplied, setIsPromoApplied] = useState<boolean>(false);

  const currentPerson = persons[0];
  const price = currentPerson?.attributes.init_price;

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
      eventType: 'faithconf',
      personType: currentPerson?.attributes.person_type,
      registerType: 'Конференция',
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
    onPromoChange,
    promoError,
  };
};
