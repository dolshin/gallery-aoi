export const NAVIGATION_ITEMS_Label = {
  Top: "トップ",
  Facility: "施設情報",
  Price: "料金",
  Flow: "ご利用の流れ",
  News: "お知らせ",
  Event: "イベント情報",
  Access: "アクセス",
  Faq: "よくある質問",
  Contact: "お問い合わせ",
  Reservation: "予約",
  Privacy: "プライバシーポリシー",
  Terms: "利用規約",
} as const;
export type NAVIGATION_ITEMS_Label_Type =
  (typeof NAVIGATION_ITEMS_Label)[keyof typeof NAVIGATION_ITEMS_Label];
export const NAVIGATION_ITEMS_Path = {
  Top: "/",
  News: "/news/",
  Event: "/event/",
  About: "/about/",
  Guide: "/guide/",
  Access: "/access/",
  Faq: "/faq/",
  Contact: "/contact/",
  Privacy: "/privacy-policy/",
  Terms: "/terms/",
};
export type NAVIGATION_ITEMS_Path_Type =
  (typeof NAVIGATION_ITEMS_Path)[keyof typeof NAVIGATION_ITEMS_Path];

export const NAVIGATION_ITEMS = {
  Top: "トップ",
  Facility: "施設情報",
  Price: "料金",
  Faq: "よくある質問",
  Event: "イベント",
  Access: "アクセス",
  Contact: "お問い合わせ",
  Apply: "お申し込み",
} as const;

export type NAVIGATION_ITEMS_KEY = keyof typeof NAVIGATION_ITEMS;
export type NAVIGATION_ITEMS_VALUE =
  (typeof NAVIGATION_ITEMS)[keyof typeof NAVIGATION_ITEMS];
