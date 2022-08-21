import React, { useState } from "react";

import styles from '../styles/Home.module.scss'
import testJson from '../test.json';
import TodoListModal from '../components/todoListModal';
import Modal from 'react-modal';

const TodoList : React.FC = () => {
    const [todoValues, setTodoValues] = useState('');
    const [formValues, setFormValues] = useState('');

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
    };

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {name, value} = e.target;
        setTodoValues(value);
    }

    const [modalOpen, setModalOpne] = useState(false);

    const handleCardView = () => {
        setModalOpne(true);
    }

    return (
        <div className={styles.todo}>
            <form className={styles.todo__form}>
                <input
                    type="text"
                    placeholder="할 일을 입력하세요"
                    onChange={handleChange}
                />
                <button type="submit"></button>
            </form>
            <ul className={styles.todo__list}>
                {
                    testJson.todos.map((val, idx) => {
                        return (
                            <li key={idx} onClick={handleCardView}>
                                <p>{val.data.title}</p>
                                <Modal
                                    isOpen={modalOpen}
                                    ariaHideApp={false}
                                >
                                    <TodoListModal/>
                                </Modal>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;