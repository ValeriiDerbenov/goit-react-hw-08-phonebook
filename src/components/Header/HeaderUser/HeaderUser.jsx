// import {useSelector} from "react-redux";

// import { selectUser } from "../../../redux/auth/auth-selectors";

import styles from "./header-user.module.css";

const HeaderUser = ()=> {
    // const {name} = useSelector(selectUser);

    return (
        <div className={styles.block}>
            Valerii
            {/* {name}  */}
            <button>Logout</button>
        </div>
    )
}

export default HeaderUser;