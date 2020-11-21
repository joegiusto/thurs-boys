import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dbConnect from '../utils/dbConnect'
import Person from '../models/Person';
// import Person from '../models/Person'
import moment from 'moment';

function Vote(props) {

  let test = JSON.parse(props.events);
  console.log(test)

  return (
    <div className={styles.container}>
      <Head>
        <title>Voting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='container mt-4'>

        <h1 className={styles.title}>
          Stats Page
        </h1>

        <p className={styles.description + ' d-none'}>
          Days left to vote{' '}
          <code className={styles.code}>{props.daysRemaining}</code>
        </p>

        <div className="leaderboard mt-5">
          {/* <h3 className={styles.subtitle}>Previous Weeks</h3> */}
          {/* <p className={styles.description}>Highest to Lowest | A-Z</p> */}

          <table className="table mt-4">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Winner</th>
                <th scope="col">Vote</th>
                {/* <th scope="col">Place</th> */}
                <th scope="col">Votes</th>
                <th scope="col text-right">Attended</th>
              </tr>
            </thead>
            <tbody>



            </tbody>
          </table>

        </div>

      </div>

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

function replacer(key, value) {
  if (typeof value === 'Date') {
    return value.toString();
  }
  return value;
}

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Person.find({})

  console.log("Result")
  console.log(result)

  let people = result.map((doc) => {
    const pet = doc.toObject()
    pet._id = pet._id.toString()
    return pet
  })

  people = JSON.stringify(people)

  return { props: { events: people } }
}

export default Vote