import Brand from "./Brand";
import MainNav from "./MainNav";
import UserNav from "./UserNav";
// Styles
import styles from "./Header.module.scss";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<aside className={styles.header}>
			<Brand />
			<MainNav />
			<UserNav />
		</aside>
	);
};

export default Header;
