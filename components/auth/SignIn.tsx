import React, {useState} from "react";

import axios from 'axios';
import UseAuthForm from 'common/UseAuthForm';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [modalText, setModalText] = useState<string>('');

    const modalOpen = (text : string) => {
        setIsOpen(true);
        setModalText(text);
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        console.log()

        await axios.post('http://localhost:8080/users/login', {
            email: email,
            password: password
        }).then((response) => {
            console.log(response)
            // TODO: todolist로 이동 (refresh)
            console.log(response)
            console.log(response.data.token)
            localStorage.setItem('isUser', response.data.token);

            modalOpen(response.data.message);
        }).catch((error) => {
            console.log(error)
            console.log(error)
            modalOpen(error.response.data.details);
        })
    }

    return (
        <UseAuthForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            onSubmit={onSubmit}
            modalText={modalText}
            setModalText={setModalText}
            isUser={true}
        />
    )
};

export default SignIn;