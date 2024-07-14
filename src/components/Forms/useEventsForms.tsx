'use client';

import { CustomFormData } from "@/interfaces/utils";
import { fetchEvent } from "@/store/eventSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getPayment } from "@/api/payments";
import { TStandartForm } from "@/interfaces/forms";

type useEventsForms = { slug: string, };

export const useEventsForms = <T extends {}>({ slug }: useEventsForms) => {
  const { register, handleSubmit, formState: { errors, isLoading, isValid } } = useForm<T>({ mode: "onBlur" });

  const eventData = useSelector(
    (state: RootState) => ({
      title: state.event.title,
      eventType: state.event.type,
      price: state.event.price,
      role: state.event.role
    }),
    (prev, next) => prev.title === next.title && prev.eventType === next.eventType && prev.price === next.price && prev.role === next.role
  );
  const description = "Добровольное пожертвование";
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchEvent(slug));
  }, [dispatch, slug]);

  const onSubmit = async (data: CustomFormData) => {

    const backendData: TStandartForm = {
      price: eventData.price,
      email: data.email,
      agreement: data.agreement,
      church: data.church,
      city: data.city,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      eventType: eventData.eventType,
      role: eventData.role,
    };

    console.log(backendData);

    // const linkHref = await getPayment(backendData);
    // window.location.href = linkHref;
  };

  return {
    register,
    handleSubmit,
    errors,
    price: eventData.price,
    onSubmit,
    isLoading,
    isValid
  }
}