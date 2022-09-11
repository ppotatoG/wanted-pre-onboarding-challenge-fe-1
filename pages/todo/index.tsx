import React, { useState, useEffect } from "react";

import TodoList from '@components/todo/TodoList';
import SignIn from '@components/auth/SignIn';

import styles from '@styles/Home.module.scss'

const Todo: React.FC = () => {
    // console.log(localStorage.getItem('isUer'))
    // 가져오는 시점에 따라 값이 달라짐
    // redux 사용하여 공유 가능한 상태값 사용?

    return (
        <article className={styles.article}>
            <h2>TODO LIST</h2>
                <SignIn/>
        </article>
    )
};

export default Todo;