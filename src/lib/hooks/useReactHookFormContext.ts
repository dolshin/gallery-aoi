import { FieldValues, useFormContext, UseFormReturn } from "react-hook-form";

export function useReactHookFormContext<
  T extends FieldValues,
>(): UseFormReturn<T> {
  return useFormContext();
}
