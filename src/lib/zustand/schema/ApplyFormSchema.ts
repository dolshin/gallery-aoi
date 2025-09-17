import * as z from "zod";

export const ApplyFormSchema = z.object({
  name: z.string().min(1, "お名前は必須です。"),
  phoneticName: z.string().min(1, "フリガナは必須です。"),
  email: z
    .string()
    .min(1, "メールアドレスは必須です。")
    .email("有効なメールアドレスを入力してください"),
  phoneNumber: z
    .string()
    .min(1, "電話番号は必須です。")
    .regex(/^[0-9-]+$/, "電話番号は数字とハイフンのみで入力してください"),

  startDate: z.string().min(1, "利用開始日は必須です。"),
  endDate: z.string().min(1, "利用終了日は必須です。"),
  eventName: z.string().optional(),
  remarks: z.string().optional(),
  agreeUsageRules: z.boolean().refine((val) => val === true, {
    message: "使用規定に同意してください。",
  }),
});

export type ApplyFormType = z.infer<typeof ApplyFormSchema>;
