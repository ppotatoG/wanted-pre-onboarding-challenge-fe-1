import React, { useState, useEffect, useCallback } from "react";

import { FaBeer } from 'react-icons/fa';
import styles from '../styles/Home.module.scss'
import testJson from '../test.json';

const TodoListModal = ( ) => {
    const [reviseList, setReviseList] = useState(false);

    const updateTodo = () => {
        console.log('updateTodo');
    }

    const deleteTodo = () => {
        console.log('deleteTodo');
    }

    const [content, setContent] = useState('');
    const [contentError, setContentError] = useState(false);

    const onChangeContent = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setContent(value);

        console.log(value)
    }, [content]);

    const testDefaultValue = '수정하려는 기존 데이터';

    const handleReviseCancle = () => {
        console.log('dtd')
        setReviseList(false)
    }

    const handleRevise = () => {
        setReviseList(true)
    }
    return (
        <div className={styles.todoCard}>
            <div className={styles.todoCard__bg}></div>
            <div className={styles.todoCard__contents}>
                <button>닫기</button>
                <p>{testJson.todos[0].data.title}</p>
                {
                    reviseList
                    &&
                    <div>
                        <input
                            type="text"
                            placeholder="할 일을 입력하세요"
                            required
                            onChange={onChangeContent}
                            defaultValue={testDefaultValue ? testDefaultValue : content}
                        />
                        <div className={styles.btn_wrap}>
                            <button className={styles.btn_wrap__item} onClick={updateTodo}>수정 후 제출</button>
                            <button className={styles.btn_wrap__item} onClick={deleteTodo}><FaBeer/></button>
                            <button className={styles.btn_wrap__item} onClick={handleReviseCancle}>수정 취소</button>
                        </div>
                    </div>
                    ||
                    <div>
                        <p>{testJson.todos[0].data.content}</p>
                        <button onClick={handleRevise}>수정</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default TodoListModal;