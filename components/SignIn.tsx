import React, {useEffect, useState, useCallback} from "react";

import styles from '../styles/Home.module.scss'
import axios from 'axios';

import {EmailPattern, PasswordPattern} from '../utils/pattern';
import {userInfoType, FormProps} from '../types/auth'

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const onChangeEmailCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setEmail(value);
        setEmailErrorMessage(validate(name, value));
    };

    const onChangePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setPassword(value);
        setPasswordErrorMessage(validate(name, value));
    };

    const validate = (type: string, str: string): string => {
        if (type === 'email') {
            if (!str) {
                return '이메일을 입력해주세요';
            } else if (!EmailPattern.test(str)) {
                return '올바른 이메일을 입력해주세요.';
            }
        } else if (type === 'password') {
            if (!str) {
                return '비밀번호를 입력해주세요';
            } else if (str.length < 8) {
                return '올바른 비밀번호를 입력해주세요';
            }
        }

        return '';
    };

    const onSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        await axios.post('http://localhost:8080/users/login', {
            email: email,
            password: password
        }).then((response) => {
            alert(response.data.message);
            // TODO: todolist로 이동 (refresh)

        }).catch((error) => {
            alert(error.response.data.details);
        })
    }
    return (
        <form className={styles.auth} onSubmit={onSubmit}>
            <div className={styles.auth__item}>
                <label htmlFor='email'>이메일</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={onChangeEmailCheck}
                />
            </div>
            {emailErrorMessage !== '' && <p className={styles.errorMessage}>{emailErrorMessage}</p>}

            <div className={styles.auth__item}>
                <label htmlFor='password'>비밀번호</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={password}
                    onChange={onChangePasswordCheck}
                />
            </div>
            {passwordErrorMessage && <p className={styles.errorMessage}>{passwordErrorMessage}</p>}

            <div className={styles.btn_wrap}>
                <button
                    disabled={emailErrorMessage || passwordErrorMessage}
                    className={styles.btn_wrap__item}>
                    로그인
                </button>
                <a className={styles.btn_wrap__item} href="../auth/SignUp">회원가입</a>
            </div>
        </form>
    )
};

export default SignIn;