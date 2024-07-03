'use client';

import { useForm } from "react-hook-form";

export const useUniversalForm = () => {
  const { register, handleSubmit, formState: { errors, isLoading, isValid } } = useForm({ mode: "onBlur" });

  const onSubmit = (data: unknown) => {
    console.log(data);
  }

  return {
    register,
    handleSubmit,
    errors,
    isLoading,
    isValid,
    onSubmit,
  }
}