import React from "react";

import styles from '../../styles/Home.module.scss'

// root 지정
import TodoList from '../../components/TodoList';

const App: React.FC = () => {
    return (
        <article className={styles.article}>
            <h2>TODO LIST</h2>
            <TodoList />
    </article>
    )
};

export default App;