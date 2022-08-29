import styles from 'styles/Home.module.scss'

interface isUserType {
    isUser: string | null
}

const UserState = (isUser: isUserType): JSX.Element | React.FC => {
    const logout = () => {
        localStorage.removeItem('isUser')
        alert('setTimeout');
        setTimeout(() => {
            window.location.reload();
        }, 500)
    };

    return (
        <div className={styles.user_state}>
            {
                isUser
                && <button className={styles.btn_wrap__item} onClick={logout}>로그아웃</button>
            }
        </div>
    )
}

export default UserState;