import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

export default function Rules(props) {

  return (
    <div className={styles.container}>

      <Head>
        <title>Rules</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Rules
        </h1>

        <ul class="list-group mt-3">
          <li class="list-group-item">Attend an event and receive a point<div className="badge badge-success ml-1">+1</div></li>
          <li class="list-group-item">If you vote for an event and don't go lose a point<div className="badge badge-danger ml-1">-1</div></li>
          <li class="list-group-item">Fall so many points behind the average and you may have to do a punishment<div className="badge badge-warning ml-1">?</div></li>
        </ul>

        <Link href="/">
          <div className={'text-center mt-4'}>
            <div className="btn btn-dark btn-sm">Return Home &rarr;</div>
          </div>
        </Link>

      </main>

    </div>
  )
}
