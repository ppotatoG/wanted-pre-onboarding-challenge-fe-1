import React from "react";

import styles from '@styles/Home.module.scss'
import SignIn from '@components/auth/SignIn';

const App: React.FC = () => {
    return (
        <article className={styles.article}>
            <h2>TODO LIST</h2>
            <SignIn/>
        </article>
    )
};

export default App;