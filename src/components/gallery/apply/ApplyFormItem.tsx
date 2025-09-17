import React, { useCallback, useEffect } from "react";
import { useReactHookFormContext } from "../../../lib/hooks/useReactHookFormContext";
import { ApplyFormType } from "../../../lib/zustand/schema/ApplyFormSchema";
import ApplyFormTerms from "./ApplyFormTerms";
import { useApplyStore } from "../../../lib/zustand/store/applyStore";
const FormStyle = {
  display: "block",
  width: "100%",
  border: "1px solid #ccc",
  fontSize: "16px",
  backgroundColor: "#fff",
  borderRadius: "5px",
  padding: "17px",
  letterSpacing: "0.05em",
};

type ApplyFormItemProps = {
  label: string;
  placeholder: string;
  field: keyof ApplyFormType;
  isRequired: boolean;
};

const ApplyFormItem: React.FC<ApplyFormItemProps> = ({
  label,
  placeholder,
  field,
  isRequired,
}) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useReactHookFormContext<ApplyFormType>();
  const apply = useApplyStore((state) => state.apply);
  const contents = useCallback(
    (field: ApplyFormItemProps["field"]) => {
      switch (field) {
        case "remarks":
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

        case "startDate":
        case "endDate":
          return (
            <input
              type="date"
              {...register(field)}
              style={FormStyle}
              aria-invalid="false"
              placeholder={placeholder}
            />
          );
        case "agreeUsageRules":
          return <ApplyFormTerms />;
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
    if (!apply) return;
    Object.entries(apply).forEach(([key, value]) => {
      setValue(key as keyof ApplyFormType, value);
    });
  }, [apply, setValue]);
  return (
    <div style={{ marginBottom: "25px", position: "relative" }}>
      <dt style={{ display: "flex", padding: "10px 0" }}>
        <span style={{ fontSize: "15px", letterSpacing: "0.15em" }}>
          {label}
        </span>
        {isRequired && <span style={{ color: "#E73828" }}>*</span>}
        {field === "agreeUsageRules" && (
          <input
            type="checkbox"
            {...register(field)}
            style={{ ...FormStyle, width: "14px", margin: "auto 1em" }}
            aria-invalid="false"
            placeholder={placeholder}
          />
        )}
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

export default ApplyFormItem;
