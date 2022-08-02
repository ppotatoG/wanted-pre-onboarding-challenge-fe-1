import React, {useEffect, useState} from "react";

import styles from '../styles/Home.module.scss'

import { EmailPattern, PasswordPattern } from '../utils/pattern';
import { userInfoType, FormProps } from '../types/auth'

const SignIn: React.FC = () => {
    const initialValues : userInfoType = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    // const [formErrors, setFormErrors] = useState({});
    const [formErrors, setFormErrors] = useState<userInfoType>({});
    const [isBtnDisable, setIsBtnDisable] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = () => {
        console.log(formValues);
    };

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setFormErrors(validate(formValues));
    };

    const handleSubmit = (e : React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };

    const validate = (values : userInfoType) => {
        let errors : userInfoType = {};

        if (!values.email) {
            errors.email = "이메일을 입력해주세요";
        }
        else if (!EmailPattern.test(values.email)) {
            errors.email = "올바른 이메일을 입력해주세요.";
        }

        if (!values.password) {
            errors.password = "비밀번호를 입력해주세요";
        }
        else if (!PasswordPattern.test(values.password)) {
            errors.password = "올바른 비밀번호를 입력해주세요";
        }

        return errors;
    };

    useEffect(() => {
        console.log(Object.keys(formErrors).length)
        console.log(isSubmitting)
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submitForm();
        }
    }, [formErrors]);

    const Form : React.FC<FormProps> = ( fnc) : JSX.Element => (
        <form className={styles.auth} onSubmit={fnc} noValidate>
            {Object.keys(formErrors).length === 0 && isSubmitting && (
                <span className="success-msg">Signed in successfully</span>
            )}

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

            <button type="submit">Sign In</button>
            {/*<button*/}
            {/*    className={Object.values(formErrors).filter(v => v === '').length !== 2 && 'disabled' || ''}*/}
            {/*    type="submit"*/}
            {/*>Sign In*/}
            {/*</button>*/}
        </form>
    );

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

            <button type="submit">Sign In</button>
            {/*<button*/}
            {/*    className={Object.values(formErrors).filter(v => v === '').length !== 2 && 'disabled' || ''}*/}
            {/*    type="submit"*/}
            {/*>Sign In*/}
            {/*</button>*/}
        </form>
    )
};

export default SignIn;