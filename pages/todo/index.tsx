import React, { useState } from "react";

// todo root 지정
import styles from '../../styles/Home.module.scss'

import TodoList from '../../components/TodoList';
import SignIn from '../../components/SignIn';

import testJson from '../../test.json';

const Todo: React.FC = () => {
    return (
        <article className={styles.article}>
            <h2>TODO LIST</h2>
            <TodoList/>
            {/*{*/}
            {/*    testJson.users*/}
            {/*    // testJson.users.login*/}
            {/*    && <TodoList/>*/}
            {/*    || <SignIn />*/}
            {/*}*/}
        </article>
    )
};

export default Todo;