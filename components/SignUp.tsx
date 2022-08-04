import React, {useEffect, useState, useCallback} from "react";

import styles from '../styles/Home.module.scss'
import axios from 'axios';

import {EmailPattern, PasswordPattern} from '../utils/pattern';
import {userInfoType, FormProps} from '../types/auth'

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const onChangeEmailCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setEmail(value);
        setFormValues({...formValues, [name]: value});

        setEmailError(validate(name, value));
    }, [email]);

    const [password, setPassword] = useState('');

    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setPassword(value);
        setFormValues({...formValues, [name]: value});

        setPasswordError(validate(name, value));
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

    const [formValues, setFormValues] = useState({email:'', password:''});

    const onSubmit = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        e.preventDefault();
        console.log(formValues)
        
        if (emailError && passwordError) {
            axios.post('http://localhost:8080/users/create', {
                email: formValues.email,
                password: formValues.password
            }).then( response => {
                console.log(response)
                console.log(response.data.message)
                if (response.data.token !== '') {
                    localStorage.setItem(`${formValues.email}`, response.data.token);
                }
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
                        ? <button type="submit" className={styles.btn_wrap__item} style={{opacity: .5}}>회원가입</button>
                        : <button type="submit" className={styles.btn_wrap__item}>회원가입</button>
                }

            </div>
        </form>
    )
};

export default SignIn;