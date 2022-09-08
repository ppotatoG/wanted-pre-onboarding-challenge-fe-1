import React from "react";

import styles from '@styles/Home.module.scss'
import SignUp from '@components/auth/SignUp';

const App: React.FC = () => {
    return (
        <article className={styles.article}>
            <h2>TODO LIST</h2>
            <SignUp/>
        </article>
    )
};

export default App;