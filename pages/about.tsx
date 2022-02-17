import { NextPage } from "next"
import Head from "next/head"
import { symposiumTitle } from '../components/layout'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>{symposiumTitle} | About</title>
      </Head>
      <h1 className="text-3xl">About</h1>
      <p>
        The Southeast Data Librarian Symposium (SEDLS) is intended to provide an opportunity for librarians and other research data specialists to explore developments in the field of data librarianship, including the management and sharing of research data.
      </p>
      <p>
        In addition to learning about new work in the field, attendees will have the opportunity to network and build partnerships with regional colleagues. It is open to all who wish to attend, including students, data managers, and data scientists.
      </p>
      <h2 className="text-2xl mt-4">Program Planning</h2>
      <p>
        The symposium is organized by a volunteer committee of librarians working in the field of data librarianship. Symposium themes are based on responses from an interest survey provided to previous SEDLS attendees and relevant data librarianship topics identified by the planning committee.
      </p>
      <p>
        The program is developed based on selected proposals submitted by the community. All proposal abstracts are peer reviewed by the planning committee under a single-blind review protocol blind to author and institution.
      </p>
    </>
  )
}

export default About