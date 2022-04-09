import Link from "next/link";
// Icons
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
// Styles
import styles from "./Footer.module.scss";

type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_wrapper}>
				<section className={styles.footer_section}>
					<span className={styles.footer_section__title}>
						Conecta con nosotros
					</span>
					<a
						href="https://twitter.com/TsuiniWeb"
						className={styles.footer_link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaTwitter /> Twitter
					</a>
					<a
						href="https://www.instagram.com/TsuiniWeb"
						className={styles.footer_link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram /> Instagram
					</a>
					<a
						href="https://www.facebook.com/TsuiniWeb"
						className={styles.footer_link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebook /> Facebook
					</a>
					<a
						href="https://www.youtube.com/channel/UC5YlGdYbBpqHgFuI_f7PB5Q"
						className={styles.footer_link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaYoutube /> Youtube
					</a>
				</section>
				<section className={styles.footer_section}>
					<span className={styles.footer_section__title}>Sobre Tsuini</span>
					<Link href="/">
						<a className={styles.footer_link}>Colaborar</a>
					</Link>
					<Link href="/">
						<a className={styles.footer_link}>FAQ</a>
					</Link>
					<Link href="/">
						<a className={styles.footer_link}>Contacto</a>
					</Link>
					<Link href="/">
						<a className={styles.footer_link}>Privacidad</a>
					</Link>
					<Link href="/">
						<a className={styles.footer_link}>Terminos de uso</a>
					</Link>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
