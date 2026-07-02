import { Head } from "vite-react-ssg";

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  schema?: object;
}

const DOMAIN = "https://agd.dongbaektour.co.kr";

const SeoHead = ({ title, description, path, schema }: SeoHeadProps) => {
  const url = `${DOMAIN}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Head>
  );
};

export default SeoHead;
