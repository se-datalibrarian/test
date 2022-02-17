const Footer = () => {
  return (
    <footer className="w-full max-w-screen-md mx-auto mt-4 pt-2 pb-8 sm:pb-4 border-t-2 border-gray-800">
    <div className="font-mono flex items-center">
      <span className="mr-2">Connect with us:</span>
      <a className="px-3 py-1 link-animate" title="Contact the SEDLS planning committee via email" href="mailto:se.datalibrarian@gmail.com">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(229 231 235)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="stroke-current text-gray-800 stroke-1-5 md:stroke-2 h-8 md:h-6 connect-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      </a>
      <a className="px-3 py-1 border-l-2 border-green-400 link-animate" title="Follow SEDLS on twitter" href="https://twitter.com/SEDataLibrarian" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(229 231 235)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="stroke-current text-gray-800 stroke-1-5 md:stroke-2 h-8 md:h-6 connect-icon"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
      </a>
      <a className="px-3 py-1 border-l-2 border-green-400 link-animate" title="Connect with SEDLS on GitHub" href="https://github.com/se-datalibrarian" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(229 231 235)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="stroke-1-5 md:stroke-2 h-8 md:h-6 connect-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      </a>
    </div>
  </footer>
  )
}

export default Footer