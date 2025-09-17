import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ApplyFormType } from "../schema/ApplyFormSchema";

type ApplyStore = {
  apply: ApplyFormType;
  setApply: (data: Partial<ApplyFormType>) => void;
  resetApply: () => void;
};

const defaultApply: ApplyFormType = {
  name: "",
  phoneticName: "",
  email: "",
  phoneNumber: "",
  startDate: "",
  endDate: "",
  eventName: "",
  remarks: "",
  agreeUsageRules: false,
};

export const useApplyStore = create<ApplyStore>()(
  persist(
    (set) => ({
      apply: defaultApply,
      setApply: (data) =>
        set((state) => ({
          apply: { ...state.apply, ...data },
        })),
      resetApply: () => set({ apply: defaultApply }),
    }),
    {
      name: "apply-storage",
    },
  ),
);
