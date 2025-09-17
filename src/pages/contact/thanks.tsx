import React from "react";
import { HeadFC, PageProps } from "gatsby";
import Thanks from "../../components/gallery/contact/Thanks";
import { SEO } from "../../components/common/Seo";

const ThanksPage: React.FC<PageProps> = () => {
  return <Thanks />;
};

export default ThanksPage;
export const Head: HeadFC = () => (
  <SEO
    title="お問い合わせ完了 | ギャラリーアオイ"
    description="お問い合わせありがとうございました。確認後、担当者よりご連絡いたします。"
    pathname="/contact/thanks"
    robots={{ index: false, follow: true }}
  />
);
