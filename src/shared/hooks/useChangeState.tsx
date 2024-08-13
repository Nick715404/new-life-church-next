'use client';

import { useState } from "react";

type useChangeStateProps<T> = {
  initialState: T,
}

export const useChangeState = <T,>({ initialState }: useChangeStateProps<T>) => {
  const [state, setState] = useState<typeof initialState>(initialState);

  return {
    state,
    setState,
  }
}
