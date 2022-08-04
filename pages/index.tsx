import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Todo from '../pages/todo';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>todo list</title>
                <meta name="description" content="next todolist by wanted-pre-onboarding-challenge"/>
            </Head>

            <main>
                <Todo/>
            </main>
        </div>
    )
}

export default Home
