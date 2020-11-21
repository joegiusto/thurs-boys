import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import moment from 'moment';

export default function Home(props) {

  let leaderboard = [
    {
      name: 'Jon',
      nickname: '',
      suggestion: '',
      score: 4,
      id: ''
    },
    {
      name: 'Joey',
      nickname: '',
      suggestion: 'Jump In Lake',
      score: 4,
      id: ''
    },
    {
      name: 'Igor',
      nickname: '',
      suggestion: '',
      score: 4,
      id: ''
    },
    {
      name: 'Blanco',
      nickname: '',
      suggestion: '',
      score: 4,
      id: ''
    },
    {
      name: 'Kevin',
      nickname: '',
      suggestion: '',
      score: 2,
      id: ''
    },
    {
      name: 'Graham',
      nickname: '',
      suggestion: '',
      score: 1,
      id: ''
    }
  ]

  function sum(array, key) {
    return array.reduce((a, b) => a + (b[key] || 0), 0);
  }
  
  function average(array, number) {
    return (number / array.length);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Thurs-Boys</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Punishments
        </h1>

        <p className={styles.description}>
          Days left to vote{' '}
          <code className={styles.code}>{props.daysRemaining}</code>
        </p>

        <div className="vote mt-5 py-4 d-flex flex-column align-items-center border-top border-bottom border-dark">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">Punishment:</span>
            </div>
            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
          </div>
          <button className="btn btn-success">Cast Vote</button>
        </div>

        <div className="voted mt-5 py-4 border-top border-bottom border-dark">
          <div className="alert alert-success mb-0" role="alert">
            You have already casted a punishment
          </div>
        </div>

        <div className="punishments mt-5">
          <h3 className={styles.subtitle}>Suggested Punishments</h3>

          <table className="table mt-3">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col text-right">Suggestion</th>
              </tr>
            </thead>
            <tbody>

              {leaderboard.map( (person, i) => {
                return (
                <tr key={i}>
                  <th scope="row">{person.name}</th>
                  <td className="text-right">{person.suggestion}</td>
                </tr>
                )
              })}

            </tbody>
          </table>

        </div>

        <div>
          <button className="btn btn-danger">Clear Suggestions</button>
          <button className="btn btn-primary ml-3">Pick Random</button>
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
