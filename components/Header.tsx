import Image from "next/image"
// import Link from "next/link"

import Link from 'next/link'

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 px-10 md:px-5 py-5 border-b-2 font-['Poppins']">
       <Link href="/">
      <div className="flex items-center space-x-2"> 
          <Image
          className=" rounded-md"
          src="/apple-touch-icon.png"
          width={50}
          height={50}
          alt="logo"
          />
         <h1 className=" font-semibold text-[#000] text-2xl md:text-xl" >ASQ Unilorin</h1>
      </div>
      </Link> 
      <div>
         <Link
         href="https://asq.org/"
         className=" px-5 py-3 md:text-base bg-gray-900 text-[#ffff] font-bold flex items-center rounded-full text-center"
         >
           <p className="text-sm">Visit the ASQ website</p>
         </Link>
      </div>
    </header>
  )
}

export default Header