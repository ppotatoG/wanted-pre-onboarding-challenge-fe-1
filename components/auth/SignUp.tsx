import React, {useState} from "react";

import axios from 'axios';
import UseAuthForm from 'common/UseAuthForm';

const SignUp: React.FC = () => {
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

        axios.post('http://localhost:8080/users/create', {
            email: email,
            password: password
        }).then( response => {
            console.log(response)
            modalOpen(response.data.message);
        }).catch( error => {
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
            isUser={false}
        />
    )
};

export default SignUp;