import React, { useState, useEffect } from "react";

import styles from 'styles/Home.module.scss'

import TodoList from 'components/todo/TodoList';
import SignIn from 'components/auth/SignIn';
import UserState from 'components/UserState';

import testJson from 'test.json';

const Todo: React.FC = () => {
    let isUser : string | null = null;

    useEffect(() => {
        isUser = localStorage.isUser;
        // console.log(isUser !== null);
    },[isUser]);

    return (
        <article className={styles.article}>
            <UserState isUser={isUser} />
            <h2>TODO LIST</h2>
            {
                isUser
                || <SignIn/>
                && <TodoList/>
            }
        </article>
    )
};

export default Todo;