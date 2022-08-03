import styles from '../styles/Home.module.scss'

import testJson from '../test.json';

const TodoListCard : React.FC = () => {
    return (
        <div className={styles.todoCard}>
            <div className={styles.todoCard__bg}></div>
            <div className={styles.todoCard__contents}>
                <p>{testJson.todos[0].data.title}</p>
                <p>{testJson.todos[0].data.content}</p>
                <p>수정</p>
                <p>수정 후 제출</p>
                <p>수정 후 취소</p>
            </div>
        </div>
    )
}

export default TodoListCard;