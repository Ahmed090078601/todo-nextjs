import Image from 'next/image'
import { Content, Inter } from '@next/font/google'
import AddNewTodo from './add-new-todo';
import TodoList from './todo-list';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout home>
    <section className={utilStyles.headingMd}>
        <p>Hello, my name is Ahmed Abbas, and I am a student of Sir Zia Khan.</p>
        <p>
        I am a NextJS developer. My batch number is 40, and my hometown is Islamabad.
          <br/>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Awesome Todo App</h2>
            <AddNewTodo/>
            {/* @ts-expect-error Server Component */}
            <TodoList/>        
      </section>
            </Layout>

  )
}
