import Link from "next/link"
import NavLink from "./nav-link"
import { symposiumTitle } from '../components/layout'
import { useState } from "react"

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  let menuIcon
  let mobileNavPosition

  // Toggle menu button icon (closed = hamburger, open = x)
  if (!menuOpen) {
    menuIcon = <><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></>
    mobileNavPosition = '-translate-y-full'
  } else {
    menuIcon = <><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></>
    mobileNavPosition = ''
  }

  return (
    <nav className="flex flex-col sm:ml-2">
      <Link href="/">
        <a className="hidden sm:inline-block w-max px-2 mb-1 text-lg">{symposiumTitle}</a>
      </Link>
      <button onClick={() => setMenuOpen(!menuOpen)} className="relative inline sm:hidden w-12 h-12" aria-label="Toggle Menu">
        <svg className="absolute top-0 left-0 text-gray-800 w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          {menuIcon}
        </svg>
      </button>
      <div className={`absolute sm:static right-3 top-full -z-20 sm:z-0 w-1/2 sm:w-full flex flex-col sm:flex-row justify-between sm:justify-start bg-gray-200 p-2 sm:p-0 border-2 border-t-0 border-gray-800 sm:border-none sm:items-center divide-x-2 divide-green-400 transition-transform sm:transition-none duration-500 sm:translate-y-0 ${mobileNavPosition}`}>
        <NavLink pathname="about" />
        <NavLink pathname="program" />
      </div>
    </nav>
  )
}

export default Nav