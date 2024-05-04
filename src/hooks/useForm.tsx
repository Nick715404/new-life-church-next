import { useForm } from "react-hook-form";

const useFormHook = () => {
  return useForm({
    mode: 'onBlur',
    shouldFocusError: true
  });
};

export { useFormHook };