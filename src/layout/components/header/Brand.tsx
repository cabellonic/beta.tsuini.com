import Link from "next/link";
// Styles
import styles from "./Brand.module.scss";

type BrandProps = {};

const Brand: React.FC<BrandProps> = () => {
	return (
		<Link href={"/"}>
			<a className={styles.brand}>Tsuini.com</a>
		</Link>
	);
};

export default Brand;
