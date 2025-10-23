import { ContactFormType } from "../../src/lib/zustand/schema/ContactFormSchema";

type ContactCase = {
  title: string;
  cases: ContactFormType;
  errors: string[];
};

export const contactCases: ContactCase[] = [
  {
    title: "全項目未入力 → 全て必須エラー",
    cases: {
      name: "",
      phoneticName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    },
    errors: [
      "お名前は必須です。",
      "フリガナは必須です。",
      "メールアドレスは必須です。",
      "件名を選択してください。",
      "お問い合わせ内容は必須です。",
    ],
  },
  {
    title: "不正な入力をチェック → バリデーションエラー",
    cases: {
      name: "山田 太郎",
      phoneticName: "ヤマダ タロウ",
      email: "yamada@example", // 不正なメールアドレス
      phoneNumber: "090-1234-5678a", // 数字とハイフン以外を使用
      subject: "その他",
      message: "あ".repeat(401), // 400文字超過
    },
    errors: [
      "有効なメールアドレスを入力してください。",
      "電話番号は数字とハイフンのみで入力してください。",
      "お問い合わせ内容は400文字以内で入力してください。",
    ],
  },
];
