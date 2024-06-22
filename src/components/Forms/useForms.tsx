'use client';

import { CustomFormData } from "@/interfaces/utils";
import { fetchEvent } from "@/store/eventSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type useFormsProps = { slug: string, };

export const useForms = ({ slug }: useFormsProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<CustomFormData>({ mode: "onBlur" });
  const price = useSelector((state: RootState) => state.event.price);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchEvent(slug));
  }, [dispatch, slug]);

  const onSubmit = (data: CustomFormData) => {
    data.price = price;
    console.log(data);
  };

  return {
    register,
    handleSubmit,
    errors,
    price,
    onSubmit,
  }
}