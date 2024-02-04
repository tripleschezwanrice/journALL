"use client"

import { HomeIcon, PencilIcon, UserCircleIcon, UserIcon } from "@heroicons/react/24/outline"
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation" 



const Sidebar = () => {

    const pathname = usePathname()

    return (
      <div className="h-screen w-[128px] border-r border-gray-500 flex flex-col justify-between py-12 text-sm font-extralight fixed top-0 left-0">

        <div className='flex flex-col gap-8'>

        <Link href="/" className={clsx(`flex flex-col items-center font-bold `,{
          'border-l-4 border-purple-400' : pathname === '/'
        })}>
        <HomeIcon className="w-10 font-bold"/>
        <p>(Home)</p>
        </Link>

        <Link href="/Journals" className={clsx(`flex flex-col items-center font-bold box-border`,{
          'border-l-4 border-purple-400' : pathname === '/Journals'
        })}>
        <ChatBubbleOvalLeftIcon className="w-10"/>
        <p>(Memories)</p>
        </Link>

        <Link href="/Create" className={clsx(`flex flex-col items-center font-bold `,{
          'border-l-4 border-purple-400' : pathname === '/Create'
        })}>
        <PencilIcon className="w-10"/>
        <p>(Create)</p>
        </Link>

        </div>


        <div>
        <Link href="/login" className={clsx(`flex flex-col items-center font-bold `,{
          'outline-yellow-400 outline-8 ouline' : pathname === '/login'
        })}>
        <UserIcon className="w-10"/>
        <p>(Log In)</p>
        </Link>
        </div>


      </div>
    )
  }
  
  export default Sidebar