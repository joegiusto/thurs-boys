import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import moment from 'moment';

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'

function MyApp({ Component, pageProps }) {

  function daysRemaining() {
    var eventdate = moment().isoWeekday(4);
    var todaysdate = moment();

    pageProps.daysRemaining = eventdate.diff(todaysdate, 'days');
    return eventdate.diff(todaysdate, 'days');
  }

  let newPageProps = {
    ...pageProps,
    daysRemaining: daysRemaining()
  }

  return (
  <div>

    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link href="/" passHref>
      <span className="navbar-brand mb-0 h1">{process.env.NEXT_PUBLIC_NAME}</span>
      </Link>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">

          <Link href="/vote" passHref><a className="nav-link">Vote</a></Link>
          <Link href="/history" passHref><a className="nav-link">History</a></Link>
          <Link href="/punish" passHref><a className="nav-link">Punish</a></Link>

          <NavDropdown title="Help" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/rules">Rules</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/discord">Discord</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Navbar.Text>
            Signed in as: <a href="/account">Joey Giusto</a>
          </Navbar.Text>
          {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
          {/* <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>

    </Navbar>

    {/* This will only be shown on the day the user picks */}
    <div className="alert alert-info w-100 d-flex justify-content-center align-items-start">
      <p className="mb-0">
        The winner is!{' '}
        <b className="bold text-bold a">The Place!</b>
      </p>
    </div>

    <Component {...newPageProps} ></Component>
  </div>
  )
}

export async function getStaticProps() {
  // Using the variables below in the browser will return `undefined`. Next.js doesn't
  // expose environment variables unless they start with `NEXT_PUBLIC_`
  // console.log('[Node.js only] ENV_VARIABLE:', process.env.ENV_VARIABLE)
  // console.log(
  //   '[Node.js only] ENV_LOCAL_VARIABLE:',
  //   process.env.ENV_LOCAL_VARIABLE
  // )

  return { props: {} }
}

export default MyApp
