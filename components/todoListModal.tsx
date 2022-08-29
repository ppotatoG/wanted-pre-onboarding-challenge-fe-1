import React, {useState, useEffect, useCallback} from "react";

import styles from 'styles/Home.module.scss'
import styled from "styled-components";

import testJson from 'test.json';

import { faXmark, faTrashCan, faBan, faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
    modalView: boolean,
    setModalView: Function
};

const TodoListModal : React.FC<props> = ({modalView, setModalView}) : any => {
    const [reviseList, setReviseList] = useState(false);

    const [content, setContent] = useState(testJson.todos[0].data.content);
    const [contentError, setContentError] = useState(false);

    const updateTodo = () => {
        console.log('updateTodo');
    };

    const deleteTodo = () => {
        console.log('deleteTodo');
    };

    const onChangeContent = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setContent(value);

        console.log(value)
    }, [content]);

    const testDefaultValue = '수정하려는 기존 데이터';

    const handleReviseCancle = () => {
        console.log('dtd')
        setReviseList(false)
    };

    const handleRevise = () => {
        setReviseList(true)
    };

    return (
        modalView &&
        <div className={styles.todoCard}>
            <div className={styles.todoCard__bg} onClick={() => setModalView(false)}></div>
            <div className={styles.todoCard__contents}>
                <CloseButton onClick={() => setModalView(false)}>
                    <FontAwesomeIcon icon={faXmark} style={{color: '#fff'}} size='2x'/>
                </CloseButton>
                <ModalTitle>{testJson.todos[0].data.title}</ModalTitle>

                {
                    reviseList
                    &&
                    <div>
                        <ModalInput
                            type="text"
                            required
                            onChange={onChangeContent}
                            value={content}
                        />
                        <div className={styles.btn_wrap}>
                            <button className={styles.btn_wrap__item} onClick={updateTodo}>
                                <FontAwesomeIcon icon={faFileArrowUp} style={{color: '#fff'}}/>
                                수정
                            </button>
                            <button className={styles.btn_wrap__item} onClick={deleteTodo}>
                                <FontAwesomeIcon icon={faTrashCan} style={{color: '#fff'}}/>
                                삭제
                            </button>
                            <button className={styles.btn_wrap__item} onClick={handleReviseCancle}>
                                <FontAwesomeIcon icon={faBan} style={{color: '#fff'}}/>
                                수정 취소
                            </button>
                        </div>
                    </div>
                    ||
                    <div>
                        <ModalText>{testJson.todos[0].data.content}</ModalText>
                        <div className={styles.btn_wrap}>
                            <button className={`${styles.btn_wrap__item} edit`} onClick={handleRevise} >수정</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

const ModalTitle = styled.h3`
    font-size: 24px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: -40px;
    right: 0;
`;

const ModalInput = styled.input`
    padding-top: 10px;
    font-size: 18px;
    display: block;
    width: 100%;
    box-sizing: border-box;
`;

const ModalText = styled.p`
    padding-top: 10px;
    font-size: 20px;
`;

export default TodoListModal;