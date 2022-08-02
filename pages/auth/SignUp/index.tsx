import React from "react";

import styles from '../../../styles/Home.module.scss'
import 'antd/dist/antd.css';

import SignUp from '../../../components/SignUp';

const App: React.FC = () => {
    return (
        <article className={styles.article}>
            <h2>TODO LIST</h2>
            <SignUp />
        </article>
    )
};

export default App;