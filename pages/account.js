import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import dbConnect from '../utils/dbConnect'
import Person from '../models/Person';

function Account(props) {

  return (
    <div className={styles.container}>

      <Head>
        <title>Account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Account Settings
        </h1>

        <p>Coming Soon</p>

      </main>

      <footer className={styles.footer + ' d-none'}>

        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="d-none"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  await dbConnect()

  let result = await Person.findById('5fb8435f42d9b93a6bf6caaf');

  // const data = await result.json()

  result = JSON.stringify(result)

  return { props: { user: result } }
}

export default Account
