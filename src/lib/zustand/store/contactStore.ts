import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ContactFormType } from "../schema/ContactFormSchema";

type ContactStore = {
  contact: ContactFormType;
  setContact: (data: Partial<ContactFormType>) => void;
  resetContact: () => void;
};

const defaultContact: ContactFormType = {
  name: "",
  phoneticName: "",
  subject: "",
  email: "",
  phoneNumber: "",
  message: "",
};

export const useContactStore = create<ContactStore>()(
  persist(
    (set) => ({
      contact: defaultContact,
      setContact: (data) =>
        set((state) => ({
          contact: { ...state.contact, ...data },
        })),
      resetContact: () => set({ contact: defaultContact }),
    }),
    {
      name: "contact-storage",
    },
  ),
);
