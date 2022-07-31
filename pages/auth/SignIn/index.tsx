import styles from '../../../styles/Home.module.scss'
import 'antd/dist/antd.css';

import SignIn from '../../../components/SignIn';

const App: React.FC = () => {
    return (
        <article className={styles.article}>
            <SignIn />
        </article>
    )
};

export default App;