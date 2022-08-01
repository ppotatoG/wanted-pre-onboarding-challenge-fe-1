import React, {useEffect, useState} from "react";

import styles from '../styles/Home.module.scss'

import { EmailPattern, PasswordPattern } from '../utils/pattern';


// todo interface ../types/ 로 옮기기
interface ddd{
    text: React.KeyboardEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>
}

interface errors {
    email: string | '';
    password: string | '';
}

const SignIn: React.FC = () => {
    // todo 상태값 관리에 type 추가하기
    const intialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = () => {
        console.log('submitForm')
    };

    const handleChange = (e : any) => {
        e.preventDefault();

        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setFormErrors(validate(name, formValues));
    };

    const handleSubmit = (e : any) => {
        e.preventDefault();

        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setFormErrors(validate(name, formValues));
    };

    const validate = (type: string, values : errors) => {
        const errors : errors = {
            email : '',
            password : ''
        };

        if(type === 'email') {
            if (!values.email) {
                errors.email = "이메일을 입력해주세요";
            }
            else if (!EmailPattern.test(values.email)) {
                errors.email = "올바른 이메일을 입력해주세요.";
            }

        }

        else if(type === 'password') {
            if (!values.password) {
                errors.password = "비밀번호를 입력해주세요";
            }
            else if (values.password.length < 8) {
                errors.password = "올바른 비밀번호를 입력해주세요";
            }
        }

        return errors;
    };

    useEffect(() => {
        // todo 유효성 확인
        console.log(Object.keys(formErrors).length);
        console.log(Object.keys(formErrors))
        console.log(Object.values(formErrors))

        if(formErrors.email === '' && formErrors.password === '') {
            console.log('!!!')
            setIsSubmitting(true);
        }

        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submitForm();
        }

    }, [formErrors]);

    return(
        <form className={styles.auth} onSubmit={handleSubmit}>
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
            {/*todo errormessage 두개 다 노출시키기*/}
            {formErrors.email && (
                <p className={styles.auth__error}>{formErrors.email}</p>
            )}

            <div className={styles.auth__item}>
                <label htmlFor='input_pw'>PW</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formValues.password}
                    onChange={handleChange}
                    className={formErrors.password && "input-error"}
                />
            </div>
            {/*todo errormessage 두개 다 노출시키기*/}
            {formErrors.password && (
                <p className={styles.auth__error}>{formErrors.password}</p>
            )}

            <button
                className={Object.values(formErrors).filter(v => v === '').length !== 2 && 'disabled' || ''}
                type="submit"
            >Sign In
            </button>
        </form>
    )
};

export default SignIn;