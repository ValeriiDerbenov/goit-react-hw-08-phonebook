import React from 'react';
import styles from './header.module.css'
import { NavLink } from "react-router-dom";
// import NavbarAuth from './HeaderAuth/NavbarAuth';
import HeaderUser from './HeaderUser/HeaderUser';
import HeaderAuth from './HeaderAuth/HeaderAuth';

const Header = ({children}) => {
	const isLogin = true;
	return (
	<div>
			<header>
			<ul className={styles.menu}>
				<li>
					<NavLink className={styles.link} to="/">Home</NavLink>
				</li>
				<li>
					<NavLink className={styles.link} to="/login">Login</NavLink>
				</li>
				<li>
					<NavLink className={styles.link} to="/register">Register</NavLink>
				</li>
		</ul>
		{isLogin ? <HeaderUser /> : <HeaderAuth />}
		</header>
		<main>{children}</main>
	</div>
	)
}

export default Header