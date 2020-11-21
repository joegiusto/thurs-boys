import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

export default function Vote(props) {

  return (
    <div className={styles.container}>

      <Head>
        <title>Discord</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Discord Help
        </h1>

        <p className={styles.description}>
          Days left to vote{' '}
          <code className={styles.code}>{props.daysRemaining}</code>
        </p>

        <div className="leaderboard mt-5 w-100">
          <h3 className={styles.subtitle + ' mb-4'}>Commands</h3>

          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                !vote (text)
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>(text) - Your vote for the place this week.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                !list
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>List out all the votes for this week.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

        </div>

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
