import type { NextPage } from 'next'
import Head from 'next/head'
import AnimatedLogo from '../components/logo-animated'
import { symposiumTitle } from '../components/layout'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{symposiumTitle}</title>
      </Head>
      <AnimatedLogo />
      <h1 className="w-full text-center text-2xl">{symposiumTitle}</h1>
      <p>
        Check out <a className="link" href="https://se-datalibrarian.github.io/2021/program/">last year&#39;s program</a> to view abstracts, posters, and presentation recordings for an idea of content.
      </p>
      <p>
        SEDLS is open to all who wish to attend, including students, data managers, and data scientists. Learn more about SEDLS on the <Link href="/about"><a className="link">About Us page</a></Link>.
      </p>
      <p>
        This website will be updated with the latest information as planning continues. You can reach out to <a title="Contact us via email" href="mailto:se.datalibrarian@gmail.com">se.datalibrarian@gmail.com</a> with any questions.
      </p>
    </>
  )
}

export default Home
