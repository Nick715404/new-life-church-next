'use client';

import { useState } from "react";

type useCustomSelectProps = { styles?: any, };

export const useCustomSelect = ({ styles }: useCustomSelectProps) => {
  const [active, setActive] = useState<boolean>(false);

  if (!styles) {
    return {
      setActive,
      status: active,
    }
  }

  const classNameHandler = active ? `${styles.icon} ${styles.active}` : `${styles.icon}`;
  const selectHandler = () => setActive(!active);

  return {
    classNameHandler,
    selectHandler,
    state: active,
    setActive,
  }
}