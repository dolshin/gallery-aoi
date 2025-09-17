import React from "react";
import { HeadFC, PageProps } from "gatsby";
import Confirm from "../../components/gallery/contact/Confirm";
import { SEO } from "../../components/common/Seo";

const ConfirmPage: React.FC<PageProps> = () => {
  return <Confirm />;
};

export default ConfirmPage;
export const Head: HeadFC = () => (
  <SEO
    title="お問い合わせ内容の確認 | ギャラリーアオイ"
    description="お問い合わせフォームの確認画面です。内容をご確認の上、送信ボタンを押してください。"
    pathname="/contact/confirm"
    robots={{ index: false, follow: true }}
  />
);
