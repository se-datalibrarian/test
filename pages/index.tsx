import type { NextPage } from 'next'
import Head from 'next/head'
import AnimatedLogo from '../components/logo-animated'
import { symposiumTitle } from '../components/layout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{symposiumTitle}</title>
      </Head>
      <AnimatedLogo />
      <h1 className="w-full text-center text-2xl">{symposiumTitle}</h1>
    </>
  )
}

export default Home
