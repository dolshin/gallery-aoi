import {
  FieldValues,
  useForm,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form";

export function useReactHookForm<T extends FieldValues>(
  props: UseFormProps<T>,
): UseFormReturn<T> {
  const inputForm = useForm(props);

  return inputForm;
}
