
import { deleteById, getJournals } from "@/data/actions"
import { TrashIcon } from "@heroicons/react/24/outline"
import Link from "next/link"


const page = async () => {
  
  const Journals = await getJournals()
  console.log(Journals)
 
  return (
    <div className="p-12 justify-center flex flex-wrap gap-2">
{
  Journals.map((journal:any)=>(
    <Link href = {`/Journals/${journal.id}`} key={journal.id} className="flex border-2 w-[45%] justify-between p-2 border-black bg-yellow-300">
        <p className="text-xl font-bold">{journal.title}</p>
        <p>{journal.content.slice(0,20)}...</p>
    </Link>
  ))
}
    </div>
  )
}

export default page