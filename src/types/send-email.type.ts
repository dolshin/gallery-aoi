export type ApiResponse = {
  statusCode: number;
  body: { error?: string } | { success: boolean; id: string | undefined };
};

export const ERROR_CODES = {
  VALIDATION_ERROR: "VALIDATION_ERROR",
  AUTH_REQUIRED: "AUTH_REQUIRED",
  PERMISSION_DENIED: "PERMISSION_DENIED",
  SERVER_ERROR: "SERVER_ERROR",
  METHOD_NOT_ALLOWED: "METHOD_NOT_ALLOWED",
} as const;

export type ErrorCode = keyof typeof ERROR_CODES;

// フロントでユーザーに見せる文言
export const ERROR_MESSAGES: Record<ErrorCode, string> = {
  VALIDATION_ERROR: "入力内容に誤りがあります",
  AUTH_REQUIRED: "認証が必要です。ログインしてください",
  PERMISSION_DENIED: "権限がありません",
  SERVER_ERROR: "サーバーでエラーが発生しました",
  METHOD_NOT_ALLOWED: "不正なリクエストです",
};
