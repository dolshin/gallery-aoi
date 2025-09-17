import React, { useCallback, useEffect } from "react";
import { useReactHookFormContext } from "../../../lib/hooks/useReactHookFormContext";
import { ContactFormType } from "../../../lib/zustand/schema/ContactFormSchema";
import { OPTIONS } from "./constants";
import { useContactStore } from "../../../lib/zustand/store/contactStore";
const FormStyle = {
  display: "block",
  width: "100%",
  border: "1px solid #ccc",
  fontSize: "16px",
  backgroundColor: "#fff",
  borderRadius: "5px",
  padding: "20px 24px",
  letterSpacing: "0.1em",
};

type ContactFormItemProps = {
  label: string;
  placeholder: string;
  field: keyof ContactFormType;
  isRequired: boolean;
};

const ContactFormItem: React.FC<ContactFormItemProps> = ({
  label,
  placeholder,
  field,
  isRequired,
}) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useReactHookFormContext<ContactFormType>();
  const contact = useContactStore((state) => state.contact);
  const contents = useCallback(
    (field: ContactFormItemProps["field"]) => {
      switch (field) {
        case "message":
          return (
            <textarea
              cols={40}
              rows={10}
              {...register(field)}
              style={FormStyle}
              aria-invalid="false"
              placeholder={placeholder}
            />
          );
        case "select":
          return (
            <select
              {...register(field)}
              style={{ ...FormStyle, appearance: "none" }}
            >
              {OPTIONS.map((option, index) => (
                <option
                  value={option.value}
                  key={index}
                  hidden={option.value === ""}
                >
                  {option.label}
                </option>
              ))}
            </select>
          );
        default:
          return (
            <input
              type="text"
              {...register(field)}
              style={FormStyle}
              placeholder={placeholder}
            />
          );
      }
    },
    [placeholder, register],
  );
  useEffect(() => {
    if (!contact) return;
    setValue("name", contact.name);
    setValue("phoneticName", contact.phoneticName);
    setValue("select", contact.select);
    setValue("email", contact.email);
    setValue("phoneNumber", contact.phoneNumber);
    setValue("message", contact.message);
  }, [contact, setValue]);
  return (
    <div style={{ marginBottom: "25px" }}>
      <dt style={{ display: "flex", padding: "10px 0" }}>
        <span style={{ fontSize: "15px", letterSpacing: "0.15em" }}>
          {label}
        </span>

        {isRequired && <span style={{ color: "#E73828" }}>*</span>}
      </dt>
      {contents(field)}
      {errors[field] && (
        <div style={{ color: "red", fontSize: "14px" }}>
          {errors[field]?.message}
        </div>
      )}
    </div>
  );
};

export default ContactFormItem;
