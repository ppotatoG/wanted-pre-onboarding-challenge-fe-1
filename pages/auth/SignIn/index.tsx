import React from "react";

import styles from '@styles/Home.module.scss'
import SignIn from '@components/auth/SignIn';
import Logo from "@components/Logo";

const App: React.FC = () => {
    return (
        <article className={styles.article}>
            <Logo />
            <SignIn/>
        </article>
    )
};

export default App;