import React, {useEffect, useState, useCallback} from "react";

// todo root 지정
import styles from '../styles/Home.module.scss'
import axios from 'axios';

import {EmailPattern, PasswordPattern} from '../utils/pattern';
import {userInfoType, FormProps} from '../types/auth'

const SignIn: React.FC = () => {
    const [formValues, setFormValues] = useState({email: '', password: ''});

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const onChangeEmailCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setEmail(value);
        
        // todo change마다 값 초기화되는 오류
        setFormValues({...formValues, [name]: value});

        setEmailError(validate(name, value));

        console.log(formValues)
    }, [email]);

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const onChangePasswordCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setPassword(value);
        
        // todo change마다 값 초기화되는 오류
        setFormValues({...formValues, [name]: value});

        setPasswordError(validate(name, value));

        console.log(formValues)
    }, [password]);

    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPwErrorMessage] = useState('');

    const validate = (type: string, str: string): boolean => {
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

    const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(formValues)

        if (emailError && passwordError) {
            // todo env 설정하기
            axios.post('http://localhost:8080/users/login', {
                email: formValues.email,
                password: formValues.password
            }).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
                console.log(error.response.data.message)
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

            <div className={styles.btn_wrap}>
                {
                    !emailError || !passwordError
                        ? <button type="submit" className={styles.btn_wrap__item} style={{opacity: .5}}>로그인</button>
                        : <button type="submit" className={styles.btn_wrap__item}>로그인</button>
                }

                <a className={styles.btn_wrap__item} href="../auth/SignUp">회원가입</a>
            </div>
        </form>
    )
};

export default SignIn;