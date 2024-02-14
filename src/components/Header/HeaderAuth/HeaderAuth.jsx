import { NavLink } from "react-router-dom";

import styles from "./header-auth.module.css";

const HeaderAuth = ()=> {
    return (
        <div className={styles.block}>
            <NavLink to="/register" className={styles.link}>Register</NavLink>
            |
            <NavLink to="/login" className={styles.link}>Login</NavLink>
        </div>
    )
}

export default HeaderAuth;