import React, {useState} from "react";

import styles from '@styles/Home.module.scss'
import axios from 'axios';

import {EmailPattern} from '@utils/pattern';

const SignUp: React.FC = () => {
    // TODO: 중복코드 common

    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<boolean>(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState<string | ''>('');

    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState<string | ''>('');

    const onChangeEmailCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setEmail(value);
        setEmailErrorMessage(validate(name, value));
        setEmailError(emailErrorMessage === '');
    };

    const onChangePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setPassword(value);
        setPasswordErrorMessage(validate(name, value));
        setPasswordError(passwordErrorMessage === '');
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

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (emailError && passwordError) {
            axios.post('http://localhost:8080/users/create', {
                email: email,
                password: password
            }).then( response => {
                console.log(response)
                console.log(response.data.message)
            }).catch( error => {
                console.log(error)
                console.log(error.response.data.details)
            })
        }
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
                    disabled={!emailError || !passwordError}
                    className={styles.btn_wrap__item}>
                    회원가입
                </button>
            </div>
        </form>
    )
};

export default SignUp;