import { ContactFormType } from "../../../lib/zustand/schema/ContactFormSchema";

type FormItemType = {
  label: string;
  field: keyof ContactFormType;
  placeholder: string;
  isRequired: boolean;
};
export const FORM_ITEMS: FormItemType[] = [
  {
    label: "お名前",
    placeholder: "例) 山田太郎",
    field: "name",
    isRequired: true,
  },
  {
    label: "お名前(フリガナ)",
    placeholder: "例) ヤマダタロウ",
    field: "phoneticName",
    isRequired: true,
  },
  {
    label: "メールアドレス",
    placeholder: "例) example@gmail.com",
    field: "email",
    isRequired: true,
  },
  {
    label: "電話番号",
    placeholder: "例) 1234-56-7890",
    field: "phoneNumber",
    isRequired: false,
  },
  {
    label: "件名",
    placeholder: "例) ヤマダタロウ",
    field: "subject",
    isRequired: true,
  },
  {
    label: "お問い合わせ内容",
    placeholder: "お問い合わせの詳細をご入力ください。",
    field: "message",
    isRequired: true,
  },
] as const;

export const OPTIONS = [
  { label: "選択してください", value: "" },
  { label: "予約", value: "予約について" },
  { label: "見学予約", value: "見学予約について" },
  { label: "設備について", value: "設備について" },
  { label: "空き状況について", value: "空き状況について" },
  { label: "その他", value: "その他" },
] as const;
