// Icons
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
// Styles
import styles from "./UserNav.module.scss";

type UserNavProps = {};

const UserNav: React.FC<UserNavProps> = ({}) => {
	return (
		<nav className={styles.user_nav}>
			<Link href="/">
				<a className={styles.search}>
					<IoSearch />
				</a>
			</Link>
			<Link href="/">
				<a className={styles.user_info}>
					<img
						className={styles.user_avatar}
						src="https://pbs.twimg.com/profile_images/1483674726379790336/rftTjonk_400x400.jpg"
						alt="user"
					/>
					<span className={styles.user_name}>@NombreDeUsuario</span>
				</a>
			</Link>
		</nav>
	);
};

export default UserNav;
