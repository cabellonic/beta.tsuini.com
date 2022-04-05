// Components
import SEO from "./SEO";
// Models
import { ISEO } from "@models/SEO";

type LayoutProps = {
	seo?: ISEO;
};

const Layout: React.FC<LayoutProps> = ({ seo, children }) => {
	return (
		<div>
			<SEO {...seo} />
			{children}
		</div>
	);
};

export default Layout;
