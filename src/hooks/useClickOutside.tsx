import { useEffect, MutableRefObject } from "react";

type Props = {
  ref: MutableRefObject<HTMLElement | null>;
  callback: () => void;
};

const useClickOutside = ({ ref, callback }: Props) => {
  const handleClick = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
};

export { useClickOutside };
