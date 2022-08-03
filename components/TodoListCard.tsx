import React, { useState } from "react";

import styles from '../styles/Home.module.scss'

import testJson from '../test.json';

const TodoListCard : React.FC = () => {
    const [cardView, setCardView] = useState(true);

    const handleCardHide = () : void => {
        setCardView(false);
    }

    const [reviseList, setReviseList] = useState(false);
    const [todoValues, setTodoValues] = useState('');

    const handleReviseList = () => {
        setReviseList(true)
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {name, value} = e.target;
        setTodoValues(value);
        console.log(value)
    }

    return (
        <div className={cardView ? styles.todoCard : styles.todoCard_none}>
            <div className={styles.todoCard__bg} onClick={handleCardHide}></div>
            <div className={styles.todoCard__contents}>
                <p onClick={handleCardHide}>닫기</p>
                <p>{testJson.todos[0].data.title}</p>
                {
                    reviseList
                    && <input
                            type="text"
                            placeholder="할 일을 입력하세요"
                            onChange={handleChange}
                            value={testJson.todos[0].data.content}
                        />
                    || <p>{testJson.todos[0].data.content}</p>
                }
                <p onClick={handleReviseList}>수정</p>
                <p>수정 후 제출</p>
                <p>수정 후 취소</p>
            </div>
        </div>
    )
}

export default TodoListCard;