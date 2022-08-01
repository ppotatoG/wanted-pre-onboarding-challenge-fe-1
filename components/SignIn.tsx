import React, {useEffect, useState} from "react";

import styles from '../styles/Home.module.scss'

import { EmailPattern, PasswordPattern } from '../utils/pattern';

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
        console.log(e)
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

        if (!values.email) {
            errors.email = "이메일을 입력해주세요";
        }
        else if (!EmailPattern.test(values.email)) {
            errors.email = "올바른 이메일을 입력해주세요.";
        }

        if (!values.password) {
            errors.password = "Cannot be blank";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        }

        return errors;
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submitForm();
        }
    }, [formErrors]);

    const onClickLogin = () => {
        console.log('click login')
    }

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
            {formErrors.password && (
                <p className={styles.auth__error}>{formErrors.password}</p>
            )}

            <button
                // className={styles.auth__button}
                className={Object.values(formErrors).filter(v => v === '').length !== 2 && 'disabled' || ''}
                type="submit"
            >Sign In
            </button>
        </form>
    )
};

export default SignIn;