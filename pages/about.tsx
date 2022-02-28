import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { parse } from 'csv-parse/sync'
import { getCsvData } from '../lib/read-csv'
import { symposiumTitle } from '../components/layout'

interface CommitteeMember {
    firstName: string,
    lastName: string,
    institution: string
}

interface AboutProps {
  planningCommittee: CommitteeMember[]
}

const About: NextPage<AboutProps> = ({ planningCommittee }) => {
  const memberListing = planningCommittee.map(d =>
    <li key={d.lastName}>{d.firstName}</li>
  )

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
      <ul>{memberListing}</ul>
      <h2 className="text-2xl mt-4">Past Symposium Websites</h2>
      <ul className="mt-4 ml-4 list-disc list-inside">
        <li className="mb-2"><a className="link" href="https://se-datalibrarian.github.io/2018/">SEDLS 2018: The Georgia Tech Library in Atlanta, GA</a></li>
        <li className="mb-2"><a className="link" href="https://se-datalibrarian.github.io/2019/">SEDLS 2019: Tulane University in New Orleans, LA</a></li>
        <li className="mb-2"><a className="link" href="https://se-datalibrarian.github.io/2020/">SEDLS 2020: Online</a></li>
        <li className="mb-2"><a className="link" href="https://se-datalibrarian.github.io/2021/">SEDLS 2021: Online</a></li>
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const planningCommitteeRaw = getCsvData('planningCommittee.csv')
  const planningCommittee: CommitteeMember[] = parse(planningCommitteeRaw, {columns: true})
  return {
    props: {
      planningCommittee
    }
  }
}

export default About