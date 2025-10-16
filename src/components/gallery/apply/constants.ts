import { ApplyFormType } from "../../../lib/zustand/schema/ApplyFormSchema";

type FormItemType = {
  label: string;
  field: keyof ApplyFormType;
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
    label: "フリガナ",
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
    isRequired: true,
  },
  {
    label: "利用開始日",
    placeholder: "例) 2023-01-01",
    field: "startDate",
    isRequired: true,
  },
  {
    label: "利用終了日",
    placeholder: "例) 2023-01-31",
    field: "endDate",
    isRequired: true,
  },
  {
    label: "展覧会名",
    placeholder: "例) ギャラリーアオイ",
    field: "eventName",
    isRequired: false,
  },
  {
    label: "備考",
    placeholder: "その他、特記事項やご連絡事項があればご記入ください。",
    field: "remarks",
    isRequired: false,
  },
  {
    label: "ギャラリーの使用規定に同意する",
    placeholder: "",
    field: "agreeUsageRules",
    isRequired: true,
  },
] as const;

export const OPTIONS = [
  { label: "選択してください", value: "" },
  { label: "予約", value: "予約" },
  { label: "見学予約", value: "見学予約" },
  { label: "利用方法について", value: "利用方法について" },
  { label: "空き状況について", value: "空き状況について" },
  { label: "その他", value: "その他" },
] as const;

export const PURPOSE_OPTIONS = [
  { label: "選択してください", value: "" },
  { label: "予約", value: "予約" },
  { label: "見学予約", value: "見学予約" },
  { label: "利用方法について", value: "利用方法について" },
  { label: "空き状況について", value: "空き状況について" },
  { label: "その他", value: "その他" },
] as const;
