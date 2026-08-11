import { Helmet } from "react-helmet-async";

const SITE = "https://thelowkey.lovable.app";

type Props = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export default function Seo({ title, description, path, type = "website" }: Props) {
  const url = `${SITE}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
