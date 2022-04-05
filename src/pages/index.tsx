import type { NextPage, GetServerSideProps, NextPageContext } from "next";
// Components
import Layout from "@layout/Layout";

type IndexPageProps = {
	title: string;
};

const Home: NextPage<IndexPageProps> = ({ title }) => {
	return (
		<Layout seo={{ title: "Home" }}>
			<h1>Welcome to {title}</h1>
		</Layout>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hello`);
	const data: IndexPageProps = await res.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { title: data.title },
	};
};
