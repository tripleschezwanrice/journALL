"use client"

import { HomeIcon, UserIcon } from "@heroicons/react/24/outline"
import { BookOpenIcon } from "@heroicons/react/24/outline"
import { PencilIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Sidebar = () => {

    const pathname = usePathname()

    return (
      <div className="h-screen w-[128px] border-r-2  flex flex-col justify-between py-12 text-sm font-extralight">

        <div className='flex flex-col gap-8'>

        <Link href="/" className={clsx(`flex flex-col items-center font-bold `,{
          'border-l-4 border-purple-400' : pathname === '/'
        })}>
        <HomeIcon className="w-12"/>
        <p>(Home)</p>
        </Link>

        <Link href="/Journals" className={clsx(`flex flex-col items-center font-bold box-border`,{
          'border-l-4 border-purple-400' : pathname === '/Journals'
        })}>
        <BookOpenIcon className="w-12"/>
        <p>(Journals)</p>
        </Link>

        <Link href="/Create" className={clsx(`flex flex-col items-center font-bold `,{
          'border-l-4 border-purple-400' : pathname === '/Create'
        })}>
        <PencilIcon className="w-12"/>
        <p>(Create)</p>
        </Link>

        </div>


        <div>
        <Link href="/login" className={clsx(`flex flex-col items-center font-bold `,{
          'outline-yellow-400 outline-8 ouline' : pathname === '/login'
        })}>
        <UserIcon className="w-12"/>
        <p>(Log In)</p>
        </Link>
        </div>


      </div>
    )
  }
  
  export default Sidebar