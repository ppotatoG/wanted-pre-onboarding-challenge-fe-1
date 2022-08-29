import React, {useState} from "react";

import styles from 'styles/Home.module.scss'
import testJson from 'test.json';
import TodoListModal from 'components/todoListModal';

const TodoList: React.FC = () => {
    const [todoValues, setTodoValues] = useState<string>('');
    const [formValues, setFormValues] = useState<string>('');

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log('handleSubmit')
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {name, value} = e.target;
        setTodoValues(value);
        console.log('handleChange')
    }

    const [modalView, setModalView] = useState<boolean>(false);

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
                            <li key={idx} onClick={() => setModalView(true)}>
                                <p>{val.data.title}</p>
                            </li>
                        )
                    })
                }
            </ul>

            <TodoListModal
                modalView={modalView}
                setModalView={setModalView}
            />
        </div>
    )
}

export default TodoList;