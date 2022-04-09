// Components
import SEO from "./SEO";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// Models
import { ISEO } from "@models/SEO";
// Styles
import styles from "./Layout.module.scss";

type LayoutProps = {
	seo?: ISEO;
};

const Layout: React.FC<LayoutProps> = ({ seo, children }) => {
	return (
		<div className={styles.layout}>
			<SEO {...seo} />
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
