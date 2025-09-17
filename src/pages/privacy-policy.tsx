import React from "react";
import { HeadFC } from "gatsby";
import { SEO } from "../components/common/Seo";
import PrivacyPolicy from "../components/gallery/privacy/PrivacyPolicy";

const PrivacyPolicyPage = () => {
  return <PrivacyPolicy />;
};

export default PrivacyPolicyPage;

export const Head: HeadFC = () => (
  <SEO
    title="プライバシーポリシー | ギャラリーアオイ"
    description="ギャラリーアオイのプライバシーポリシーページです。"
    pathname="/privacy-policy"
    robots={{ index: false, follow: true }}
  />
);
