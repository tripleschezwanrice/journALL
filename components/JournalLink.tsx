import Link from "next/link"


const JournalLink = ({id}:{id:string}) => {
  return (
  
    <Link href={`/Journals/${id}`} className="border-2 border-black flex justify-between p-2 text-xl">
        <p>Title</p>
        <p>Content...</p>
    </Link>

  )
}

export default JournalLink