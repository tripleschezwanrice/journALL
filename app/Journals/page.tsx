
import { deleteById, getJournals } from "@/data/actions"
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const page = async () => {
  
  const colors = ["bg-yellow-400","bg-red-400","bg-violet-400","bg-blue-400"]
  let i = 0;


  const Journals = await getJournals()
  console.log(Journals)
 
  return (
    <div className="mt-12 justify-center flex flex-wrap  max-w-[80%] mx-auto">

<div className="w-full flex justify-between items-center py-4 m-2">
      <p className="text-6xl font-bold">Memories</p>
      <Link href='/Create' className="border-2 border-purple-400 rounded-full px-4 py-2">
        <div className="flex gap-2 items-center">
        <PlusIcon className="w-7"/>
          <p className="text-xl">
          New</p>
          </div>
        </Link>
</div>


{
  Journals.map((journal:any)=>(
    <Link href = {`/Journals/${journal.id}`} key={journal.id} className={`flex w-[49%] min-h-[50vh] max-h-[50vh] m-1 justify-between p-2 ${colors[(i++)%4]} rounded-xl text-black`}>
      <div className="w-full">
        <div className="flex justify-between w-full items-center mb-3">
        <p className="text-5xl font-bold">{journal.title}</p>
        <div className="font-bold text-lg text-center">{journal.createdat.toString().slice(4,10)}</div>
        </div>
        <p className="text-xl text-balance">{journal.content.slice(0,452)}...</p>
      </div>
    </Link> ))
}
    </div>
  )
}

export default page