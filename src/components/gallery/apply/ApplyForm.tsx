import React from "react";
import { FormProvider, SubmitHandler } from "react-hook-form";
import {
  ApplyFormSchema,
  ApplyFormType,
} from "../../../lib/zustand/schema/ApplyFormSchema";
import ApplyFormItem from "./ApplyFormItem";
import { navigate } from "gatsby";
import { Button } from "../../common";
import { FORM_ITEMS } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useReactHookForm } from "../../../lib/hooks/useReactHookForm";
import { useApplyStore } from "../../../lib/zustand/store/applyStore";

const ApplyForm = () => {
  const setApply = useApplyStore((state) => state.setApply);
  const methods = useReactHookForm<ApplyFormType>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      phoneticName: "",
      email: "",
      phoneNumber: "",
      startDate: "",
      endDate: "",
      eventName: "",
      remarks: "",
      agreeUsageRules: false,
    },
    resolver: zodResolver(ApplyFormSchema),
  });
  const handleSubmit: SubmitHandler<ApplyFormType> = (data) => {
    setApply(data);
    navigate("/apply/confirm");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <dl
          style={{
            //padding: 60,
            //background: "#FFF",
            //border: "1px solid #eaeaea",
            maxWidth: "100%",
            //margin: "0 auto 160px",
            lineHeight: 1.5,
          }}
        >
          {FORM_ITEMS.map((item, index) => {
            return (
              <ApplyFormItem
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

export default ApplyForm;
