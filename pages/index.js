import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import moment from 'moment';
import { useState } from 'react';

function Leaderboard() {
  // Declare a new state variable, which we'll call "count"
  const [loading, setLoading] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default function Home(props) {

  let leaderboard = [
    {
      name: 'Jon',
      nickname: 'Jon',
      score: 5,
      id: ''
    },
    {
      name: 'Joey',
      nickname: 'nickname',
      score: 5,
      id: ''
    },
    {
      name: 'Igor',
      nickname: 'nickname',
      score: 5,
      id: ''
    },
    {
      name: 'Blanco',
      nickname: 'nickname',
      score: 5,
      id: ''
    },
    {
      name: 'Tyler',
      nickname: '',
      score: 4,
      id: ''
    },
    {
      name: 'Kevin',
      nickname: 'nickname',
      score: 3,
      id: ''
    },
    {
      name: 'Graham',
      nickname: 'nickname',
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

  function daysRemaining() {
    var eventdate = moment().isoWeekday(4);
    var todaysdate = moment();
    return eventdate.diff(todaysdate, 'days');
  }

  console.log(process.env.NEXT_PUBLIC_NAME);

  return (
    <div className={styles.container}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">{process.env.NEXT_PUBLIC_NAME}</a>
        </h1>

        <p className={styles.description}>
          Days left to vote{' '}
          <code className={styles.code}>{props.daysRemaining}</code>
        </p>

        <div className={styles.grid}>

          <Link href="/vote">
            <div className={styles.card}>
              <h3>Vote &rarr;</h3>
              <p>Vote for your restaurant pick for this week.</p>
            </div>
          </Link>
      
          <Link href="/stats">
            <div className={styles.card}>
              <h3>Stats &rarr;</h3>
              <p>Look through the history of Thurs-Boys!</p>
            </div>
          </Link>

          <Link href="/punish">
            <div className={styles.card}>
              <h3>Punish &rarr;</h3>
              <p>Suggest punishment ideas for those who fall behind.</p>
            </div>
          </Link>

          <Link href="/discord">
            <div className={styles.card}>
              <h3>Discord Commands &rarr;</h3>
              <p>A list of all the commands the Discord bot accepts.</p>
            </div>
          </Link>
            
        </div>

        <div className="leaderboard mt-5 w-100">
          <h3 className={styles.subtitle}>Leader board</h3>
          <p className={styles.description}>
            Average Score:{' '}
            <code className={styles.code}>{average( leaderboard, sum(leaderboard, 'score') )}</code>
          </p>


          <table className="table w-100">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col" className="text-right">Picks</th>
                <th scope="col" className="text-right">Points</th>
              </tr>
            </thead>
            <tbody>

              {leaderboard.map( (person, i) => {
                return (
                <tr key={i}>
                  <th scope="row">{person.name}</th>
                  <td className="text-right">0</td>
                  <td className="text-right">{person.score}</td>
                </tr>
                )
              })}

            </tbody>
          </table>

          <Leaderboard/>

          <Link href="/people">
            <div className={'text-center'}>
              <div className="btn btn-dark btn-sm">See All &rarr;</div>
            </div>
          </Link>

        </div>

      </main>

    </div>
  )
}
