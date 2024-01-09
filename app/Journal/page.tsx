"use client"

import Link from 'next/link';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
const {exampleJournal} = require("@/data/placeholder_data")

const page = () => {
    
    const searchParams = useSearchParams();
    const pathname = usePathname();
  const { replace } = useRouter();
 


  return (
    <>
        <div className="flex flex-col items-center gap-8 mx-auto h-screen bg-black 
        justify-center">
            <h1 className='text-yellow-300 text-5xl'>Your Entries</h1>
            {
             exampleJournal.map((journal:Journal)=>(
            <Link className="bg-yellow-300 p-4 min-w-[512px] flex justify-between font-bold" key={journal.title} href={`Journal/${journal.id}`}>
                <div>
                {journal.title}
                    </div>
                    <div>
                    {journal.createdAt}
                    </div>
            </Link>
        ))
    }
        </div>

    </>
  )
}

export default page