import * as z from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, "お名前は必須です。")
    .max(50, "お名前は50文字以内で入力してください。"),
  phoneticName: z
    .string()
    .min(1, "フリガナは必須です。")
    .max(50, "フリガナは50文字以内で入力してください。"),
  subject: z.string().min(1, "件名を選択してください。"),

  email: z
    .string()
    .min(1, "メールアドレスは必須です。")
    .email("有効なメールアドレスを入力してください。"),
  phoneNumber: z
    .string()
    .regex(/^[0-9-]+$/, "電話番号は数字とハイフンのみで入力してください。")
    .or(z.literal("")),
  message: z
    .string()
    .min(1, "お問い合わせ内容は必須です。")
    .max(400, "お問い合わせ内容は400文字以内で入力してください。"),
});

export type ContactFormType = z.infer<typeof ContactFormSchema>;
