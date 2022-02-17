import Link from "next/link"
import { useRouter } from "next/router"

 const NavLink = ({ pathname }: {pathname: string}) => {
  // Use router to get pathname for current page
  const router = useRouter()

  const pathnameCapitalized = pathname.charAt(0).toUpperCase()
    + pathname.slice(1)

  // Classes for nav links styling if active or not active
  let toggleActiveClasses = router.pathname === '/' + pathname ?
    'bg-gray-800 text-green-400' : 'link-animate'
  
  return (
    <Link href={`/${pathname}`}>
      <a className={`px-2 text-gray-800 ${toggleActiveClasses}`}>{pathnameCapitalized}</a>
    </Link>
  )
}

export default NavLink