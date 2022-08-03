import React, { useState } from "react";

import styles from '../styles/Home.module.scss'

import testJson from '../test.json';

const TodoList : React.FC = () => {
    const [todoValues, setTodoValues] = useState('');
    const [formValues, setFormValues] = useState('');

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(formValues)
        // setTodoValues(e.)
    };

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {name, value} = e.target;
        setTodoValues(value);
        console.log(value)
    }

    return (
        <div className={styles.todo}>
            <form className={styles.todo__form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="할 일을 입력하세요"
                    onChange={handleChange}
                />
                <button type="submit"></button>
            </form>
            <ul className={styles.todo__list}>
                {
                    testJson.todos.map(val => {
                        return (
                            <li>{val.data.title}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;