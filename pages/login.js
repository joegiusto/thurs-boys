import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import moment from 'moment';

export default function Login(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center w-100">
        <form className={styles.formSignin}>

          {/* <img className="mb-4" src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/> */}
          <div style={{fontSize: '4rem'}} className="mb-4">🍴</div>

          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus=""/>
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control mb-3" placeholder="Password" required=""/>
          <div className="checkbox mb-2">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">©2020</p>
        </form>
      </div>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to {process.env.NEXT_PUBLIC_NAME}
        </h1>

        

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
