'use client';

import { sendContactsFormData } from "@/api/forms";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const useContactsForm = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const [formStatus, setFormStatus] = useState<'sended' | 'not_sended'>('not_sended');

  const onSubmit = async (data: unknown) => {
    const response = await sendContactsFormData(data);
    setFormStatus(prev => (prev = response.status));
    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    formStatus
  }
};