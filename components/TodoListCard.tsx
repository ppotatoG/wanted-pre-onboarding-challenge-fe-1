import React, { useState, useEffect } from "react";

import styles from '../styles/Home.module.scss'

import testJson from '../test.json';

const TodoListCard : React.FC = () => {
    const [cardView, setCardView] = useState(true);

    const handleCardHide = () : void => {
        setCardView(false);
    }

    const [reviseList, setReviseList] = useState(false);
    const [todoValues, setTodoValues] = useState('');

    const handleReviseList = (type : string) : void => {
        switch (type) {
            case 'revise' :
                setReviseList(true);
                break;
            case 'cancel' :
                setReviseList(false);
                break;
            case 'submlt' :
                //
                break;
            default :
                console.log('?');
        }
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
                    &&
                    <div>
                        <input
                            type="text"
                            placeholder="할 일을 입력하세요"
                            onChange={handleChange}
                            value={todoValues}
                        />
                        <a onClick={handleReviseList('submit')}>수정 후 제출</a>
                        <a onClick={handleReviseList('cancle')}>취소</a>
                    </div>
                    ||
                    <div>
                        <p>{testJson.todos[0].data.content}</p>
                        <a onClick={handleReviseList('revise')}>수정</a>
                    </div>
                }
            </div>
        </div>
    )
}

export default TodoListCard;