import { NextPage } from "next";
import Head from "next/head"
import { symposiumTitle } from '../components/layout'

const Program: NextPage = () => {
  return (
    <>
    <Head>
      <title>{symposiumTitle} | Program</title>
    </Head>
      <h1 className="text-3xl">Program</h1>
      <p className="mt-4">
        Sessions will be held online through Zoom and Discord. Information and instructions to join sessions will be sent to registered attendees via email in the week before the symposium, along with links to join workshops for workshop registrants.
      </p>
    </>
  )
}

export default Program