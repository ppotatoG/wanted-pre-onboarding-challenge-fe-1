import React, { useState } from "react";

import styles from '../styles/Home.module.scss'

import testJson from '../test.json';

import TodoListCard from '../components/TodoListCard';

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

    const [cardView, setCardView] = useState(false);

    const handleCardView = (data : any) : void => {
        setCardView(true);
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
                                {cardView && <TodoListCard/>}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;