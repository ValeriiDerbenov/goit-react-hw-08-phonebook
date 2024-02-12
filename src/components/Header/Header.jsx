import React from 'react';
import styles from './header.module.css'
import { NavLink } from "react-router-dom";

const Header = ({children}) => {
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
		</header>
		<main>{children}</main>
	</div>
	)
}

export default Header