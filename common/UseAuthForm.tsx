import React, {useState} from "react";

import styles from '@styles/Home.module.scss'
import CustomModal from '@components/modal';

import {EmailPattern} from '@utils/pattern';

export default function UseAuthForm (
    {
        email,
        setEmail,
        password,
        setPassword,
        modalIsOpen,
        setIsOpen,
        modalText,
        onSubmit,
        isUser
    } : any
){
    const [emailError, setEmailError] = useState<boolean>(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState<string | ''>('');

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
                {
                    isUser &&
                    <button
                        disabled={!emailError || !passwordError}
                        className={styles.btn_wrap__item}>
                        로그인
                    </button>
                }
                <a className={styles.btn_wrap__item} href="../auth/SignUp">회원가입</a>
            </div>

            {
                modalIsOpen &&
                <CustomModal
                    text={modalText}
                    modalIsOpen={modalIsOpen}
                    setIsOpen={setIsOpen}
                />
            }
        </form>
    )
};
