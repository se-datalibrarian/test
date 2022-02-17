import Link from "next/link"
import Image from "next/image"
import Nav from "./nav"

const Header = () => {
  return (
    <header className="fixed z-10 top-0 w-screen sm:h-16 px-3 sm:px-4 flex flex-wrap items-center justify-center">
      <div className="w-full max-w-screen-md py-2 sm:pt-4 sm:pb-2 bg-gray-200 border-b-2 border-gray-800 flex items-center justify-between sm:justify-start font-mono">
        <Link href="/">
          <a className="h-14">
            <Image
              priority
              src="/images/logo-triangle.svg"
              alt="Home page"
              width={56}
              height={56}
            />
          </a>
        </Link>
        <Nav />
      </div>
    </header>
  )
}

export default Header