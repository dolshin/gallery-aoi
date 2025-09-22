import React from "react";
import { FormProvider, SubmitHandler } from "react-hook-form";
import {
  ContactFormType,
  ContactFormSchema,
} from "../../../lib/zustand/schema/ContactFormSchema";
import ContactFormItem from "./ContactFormItem";
import { navigate } from "gatsby";
import { Button } from "../../common";
import { FORM_ITEMS } from "./constants";
import { useContactStore } from "../../../lib/zustand/store/contactStore";
import { useReactHookForm } from "../../../lib/hooks/useReactHookForm";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactForm = () => {
  const setContact = useContactStore((state) => state.setContact);
  const methods = useReactHookForm<ContactFormType>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      phoneticName: "",
      subject: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    resolver: zodResolver(ContactFormSchema),
  });

  const handleSubmit: SubmitHandler<ContactFormType> = (data) => {
    setContact(data);
    navigate("/contact/confirm");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <dl
          style={{
            //padding: "0 60px",
            //background: "#FFF",
            //border: "1px solid #eaeaea",
            maxWidth: "100%",
            margin: "0",
            lineHeight: 1.5,
          }}
        >
          {FORM_ITEMS.map((item, index) => {
            return (
              <ContactFormItem
                key={index}
                isRequired={item.isRequired}
                placeholder={item.placeholder}
                field={item.field}
                label={item.label}
              />
            );
          })}
          <div style={{ textAlign: "center", margin: "60px 0 0" }}>
            <Button
              type="submit"
              label="入力内容を確認する"
              arrowType="none"
              style={{
                borderRadius: "5px",
                width: 300,
                height: 60,
                fontSize: 14,
              }}
            />
          </div>
        </dl>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
