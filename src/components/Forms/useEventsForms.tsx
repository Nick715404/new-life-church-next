'use client';

import { fetchEvent } from "@/store/eventSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

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
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchEvent(slug));
  }, [dispatch, slug]);

  return {
    register,
    handleSubmit,
    errors,
    price: eventData.price,
    isLoading,
    isValid,
    eventData,
  }
}