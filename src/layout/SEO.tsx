import Head from "next/head";
// Models
import { ISEO } from "@models/SEO";

const defaultSEOData: ISEO = {
	title: "Tsuini.com",
	description: "Música japonesa traducida al español",
};

const SEO: React.FC<ISEO> = (seo = defaultSEOData) => {
	const { title, description, image } = seo;

	return (
		<Head>
			<link rel="icon" href="/favicon.ico" />

			<title>{title}</title>
			<meta name="description" content={description} />
			{image && <meta name="image" content={image} />}

			<meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
			{image && <meta name="og:image" content={image} />}

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			{image && <meta name="twitter:image" content={image} />}
		</Head>
	);
};

export default SEO;
