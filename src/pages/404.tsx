import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import NotFound from "../components/gallery/404/NotFound";
import { SEO } from "../components/common/Seo";

const NotFoundPage: React.FC<PageProps> = () => {
  return <NotFound />;
};

export default NotFoundPage;

export const Head: HeadFC = () => (
  <SEO
    title="ページが見つかりません | ギャラリーアオイ"
    description="お探しのページは存在しません。ホームへお戻りください。"
    pathname="/404"
    robots={{ index: false, follow: true }}
  />
);
