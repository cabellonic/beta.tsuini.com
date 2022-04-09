import Link from "next/link";
// Styles
import styles from "./Footer.module.scss";

type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
	return (
		<footer>
			<Link href="/">
				<a className={styles.footer_link}>Support us</a>
			</Link>
			<Link href="/">
				<a className={styles.footer_link}>About</a>
			</Link>
			<Link href="/">
				<a className={styles.footer_link}>Contact</a>
			</Link>
			<Link href="/">
				<a className={styles.footer_link}>Privacy</a>
			</Link>
			<Link href="/">
				<a className={styles.footer_link}>Terms</a>
			</Link>
		</footer>
	);
};

export default Footer;
