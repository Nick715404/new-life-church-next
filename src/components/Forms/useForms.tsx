'use client';

import { CustomFormData } from "@/interfaces/utils";
import { fetchEvent } from "@/store/eventSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getPayment } from "@/api/payments";
import { TPaymentForm } from "@/interfaces/forms";

type useFormsProps = { slug: string, };

export const useForms = ({ slug }: useFormsProps) => {
  const { register, handleSubmit, formState: { errors, isLoading, isValid } } = useForm<CustomFormData>({ mode: "onBlur" });

  const eventData = useSelector(
    (state: RootState) => ({
      price: state.event.price,
      title: state.event.title,
    }),
    (prev, next) => prev.price === next.price && prev.title === next.title
  );
  const description = "Добровольное пожертвование";
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchEvent(slug));
  }, [dispatch, slug]);

  const onSubmit = async (data: CustomFormData) => {
    
    const backendData: TPaymentForm = {
      description: description,
      price: eventData.price,
      email: data.email,
      agreement: data.agreement,
      church: data.church,
      city: data.church,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
    };

    const linkHref = await getPayment(backendData);
    window.location.href = linkHref;
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