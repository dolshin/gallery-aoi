import * as z from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(1, "お名前は必須です。"),
  phoneticName: z.string().min(1, "フリガナは必須です。"),
  select: z.string().min(1, "件名を選択してください。"),
  email: z
    .string()
    .min(1, "メールアドレスは必須です。")
    .email("有効なメールアドレスを入力してください"),
  phoneNumber: z
    .string()
    .regex(/^[0-9-]+$/, "電話番号は数字とハイフンのみで入力してください")
    .or(z.literal("")),
  message: z.string().min(1, "お問い合わせ内容は必須です。"),
});

export type ContactFormType = z.infer<typeof ContactFormSchema>;
