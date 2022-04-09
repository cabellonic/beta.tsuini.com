import Link from "next/link";
import { useRouter } from "next/router";
// Icons
import { IoHomeSharp, IoLanguageSharp } from "react-icons/io5";
import { BsMusicNote } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { BiNews } from "react-icons/bi";
// Styles
import styles from "./MainNav.module.scss";

type MainNavProps = {};

const MainNav: React.FC<MainNavProps> = ({}) => {
	const router = useRouter();
	const pathname = router.pathname;

	return (
		<nav className={styles.main_nav}>
			<Link href="/">
				<a
					className={`${pathname == "/" ? styles.active : ""} ${
						styles.main_nav__link
					}`}
				>
					Home
				</a>
			</Link>
			<Link href="/">
				<a className={styles.main_nav__link}>News</a>
			</Link>
			<Link href="/">
				<a className={styles.main_nav__link}>Comnunity</a>
			</Link>
			<Link href="/">
				<a className={styles.main_nav__link}>Music</a>
			</Link>
			<Link href="/">
				<a className={styles.main_nav__link}>Translations</a>
			</Link>
		</nav>
	);
};

export default MainNav;
