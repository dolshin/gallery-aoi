import React from "react";
import { useSiteMetadata } from "../../lib/hooks/useSiteMetadata";

type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string;
  imagePath?: string;
  isRelativeImagePath?: boolean;
  robots?: { index: boolean; follow: boolean };
  children?: React.ReactNode;
};
export const SEO = ({
  title,
  description,
  pathname = "/",
  imagePath,
  isRelativeImagePath = true,
  robots = { index: true, follow: true },
  children,
}: SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: isRelativeImagePath
      ? `${siteUrl}${imagePath}`
      : imagePath || `${siteUrl}/default-ogp.png`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content="ギャラリーアオイ" />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:site" content={seo.twitterUsername} />
      <meta
        name="google-site-verification"
        content="eymH1Qs0vRUKR9lHfDj8WhwuAjgzODcIInMng810o30"
      />
      <meta
        name="robots"
        content={`${robots.index ? "index" : "noindex"}, ${robots.follow ? "follow" : "nofollow"}`}
      />
      <link rel="canonical" href={seo.url} />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      {children}
    </>
  );
};
