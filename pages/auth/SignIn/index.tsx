import React from "react";

import styles from '../../../styles/Home.module.scss'
import 'antd/dist/antd.css';

import SignIn from '../../../components/SignIn';

const App: React.FC = () => {
    return (
        <article className={styles.article}>
            <h2>Sign In</h2>
            <SignIn />
        </article>
    )
};

export default App;