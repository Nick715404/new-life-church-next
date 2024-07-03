'use client';

import { IEvent } from '@/interfaces/events';
import styles from './Event.module.scss';
import { useState } from "react";

type useEventProps = { data: IEvent, };

export const useEvent = ({ data }: useEventProps) => {
  const [onEvent, setOnEvent] = useState<boolean>();
  const url = data.background.data.attributes.url;
  const className = onEvent ? `${styles.event} ${styles.up}` : `${styles.event}`;

  const handleMouseOn = () => setOnEvent(true);
  const handleMouseLeave = () => setOnEvent(false);

  return {
    url,
    className,
    handleMouseLeave,
    handleMouseOn,
  }
};