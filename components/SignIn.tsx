import React, {useEffect, useState} from "react";

import styles from '../styles/Home.module.scss'

import { EmailPattern, PasswordPattern } from '../utils/pattern';
import useInputEmail from '../common/useInputEmail';

interface ddd{
    text: React.KeyboardEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>
}

const SignIn: React.FC = () => {
    const intialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = () => {
        console.log(formValues);
    };

    const handleChange = (e : any) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };

    const handleSubmit = (e : any) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };

    const validate = (values : any ) => {
        interface errors {
            email: string | '';
            password: string | '';
        }

        let errors : errors = {
            email: '',
            password: ''
        };

        //이메일 값이 없을시
        if (!values.email) {
            errors.email = "이메일을 입력해주세요";
            //이메일 정규식 표현이 옳지 않을시
        } else if (!EmailPattern.test(values.email)) {
            errors.email = "올바른 이메일을 입력해주세요.";
        }

        //비밀번호 값이 없을시
        if (!values.password) {
            errors.password = "Cannot be blank";
            //비밀번호의 길이(length)가 4글자 이하일 때
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        }

        //에러를 반환해줘 !
        return errors;
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submitForm();
        }
    }, [formErrors]);

    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
    }

    return(
        <form className={styles.auth}>
            <div className={styles.auth__item}>
                <label htmlFor='input_id'>ID</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className={formErrors.email && "error"}
                />
            </div>
            {formErrors.email && (
                <p className={styles.auth__error}>{formErrors.email}</p>
            )}
            <div className={styles.auth__item}>
                <label htmlFor='input_pw'>PW</label>
                <input
                    type='password'
                    name='input_pw'
                    // value={inputPw}
                    // onChange={handleInputPw}
                />
            </div>
            <div>
                {/*<button type='button' onClick={onClickLogin}>Login</button>*/}
            </div>
        </form>
    )
};

export default SignIn;