import styles from '../styles/Home.module.scss'

const UserState = (isUser : string | null) : JSX.Element | React.FC => {
    const logout = () => {
        localStorage.removeItem('isUser')
        window.location.reload();
    };

    return (
        <div className={styles.user_state}>
            {
                !isUser
                && <button className={styles.btn_wrap__item} onClick={logout}>로그아웃</button>
            }
        </div>
    )
}

export default UserState;