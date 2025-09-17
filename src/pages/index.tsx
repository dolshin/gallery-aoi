import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/common/Seo";
import Contents from "../components/gallery/contents/Contents";

const IndexPage: React.FC<PageProps> = () => <Contents />;

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO
    title="ギャラリーアオイ"
    description="ギャラリーアオイは展示会やワークショップに最適なレンタルギャラリーです。"
    pathname="/"
  />
);
