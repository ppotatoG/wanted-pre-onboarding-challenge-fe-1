import React from "react";

import styles from '@styles/Home.module.scss'
import SignUp from '@components/auth/SignUp';
import Logo from "@components/Logo";

const App: React.FC = () => {
    return (
        <article className={styles.article}>
            <Logo />
            <SignUp/>
        </article>
    )
};

export default App;