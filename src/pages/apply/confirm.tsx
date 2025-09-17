import React from "react";
import { HeadFC, PageProps } from "gatsby";
import Confirm from "../../components/gallery/apply/Confirm";
import { SEO } from "../../components/common/Seo";

const ConfirmPage: React.FC<PageProps> = () => {
  return <Confirm />;
};

export default ConfirmPage;
export const Head: HeadFC = () => (
  <SEO
    title="お申し込み内容の確認 | ギャラリーアオイ"
    description="お申し込みフォームの確認画面です。内容をご確認の上、送信ボタンを押してください。"
    pathname="/apply/confirm"
    robots={{ index: false, follow: true }}
  />
);
