import React, {useEffect, useState, useCallback} from "react";

import styles from '../styles/Home.module.scss'
import axios from 'axios';

import {EmailPattern, PasswordPattern} from '../utils/pattern';
import {userInfoType, FormProps} from '../types/auth'

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(true);

    const onChangeEmailCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;

        setEmail(value);
        setEmailError(validate('email', value));
    }, [email]);

    const [password, setPassword] = useState('');

    const [passwordError, setPasswordError] = useState(true);
    const onChangePasswordCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;

        setPassword(value);
        setPasswordError(validate('password', value));

    }, [password]);

    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPwErrorMessage] = useState('');

    const validate = (type: string, str: string) : boolean => {
        const errors: userInfoType = {};

        if (type === 'email') {
            if (!str) {
                errors.email = "이메일을 입력해주세요";
                setEmailErrorMessage(errors.email);

                return false;
            } else if (!EmailPattern.test(str)) {
                errors.email = "올바른 이메일을 입력해주세요.";
                setEmailErrorMessage(errors.email);

                return false;
            }

        } else if (type === 'password') {
            if (!str) {
                errors.password = "비밀번호를 입력해주세요";
                setPwErrorMessage(errors.password);

                return false;
            } else if (str.length < 8) {
                errors.password = "올바른 비밀번호를 입력해주세요";
                setPwErrorMessage(errors.password);

                return false;
            }
        }

        return true;
    };

    return (
        <form className={styles.auth}>
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
            {!emailError && <p className={styles.errorMessage}>{emailErrorMessage}</p>}
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
            {!passwordError && <p className={styles.errorMessage}>{passwordErrorMessage}</p>}
        </form>
    )
};

export default SignIn;