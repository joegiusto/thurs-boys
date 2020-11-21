import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Vote(props) {

  let leaderboard = [
    {
      name: 'Tyler',
      nickname: 'nickname',
      vote: 'Asian Fusion',
      score: '3',
      id: ''
    },
    {
      name: 'Jon',
      nickname: 'nickname',
      vote: '',
      score: '3',
      id: ''
    },
    {
      name: 'Joey',
      nickname: 'nickname',
      vote: 'Buffalo Wild Wings',
      score: '3',
      id: ''
    },
    {
      name: 'Igor',
      nickname: 'nickname',
      vote: '',
      score: '3',
      id: ''
    },
    {
      name: 'Blanco',
      nickname: 'nickname',
      vote: '',
      score: '3',
      id: ''
    },
    {
      name: 'Kevin',
      nickname: 'nickname',
      vote: '',
      score: '3',
      id: ''
    }
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Voting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Vote Page
        </h1>

        <p className={styles.description}>
          Days left to vote{' '}
          <code className={styles.code}>{props.daysRemaining}</code>
        </p>

        <div className="vote mt-5 py-4 d-flex flex-column align-items-center border-top border-bottom border-dark">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">Vote:</span>
            </div>
            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
          </div>
          <button className="btn btn-success">Cast Vote</button>
        </div>

        <div className="voted mt-5 py-4 border-top border-bottom border-dark">
          <div className="alert alert-success mb-0" role="alert">
            You have already casted a vote
          </div>
        </div>

        <div className="leaderboard mt-5">
          <h3 className={styles.subtitle}>Votes This Week</h3>

          <table className="table mt-3">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col text-right">Vote</th>
              </tr>
            </thead>
            <tbody>

              {leaderboard.map( (person, i) => {
                return (
                <tr key={i}>
                  <th scope="row">{person.name}</th>
                  <td className="text-right">{person.vote}</td>
                </tr>
                )
              })}

            </tbody>
          </table>

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
