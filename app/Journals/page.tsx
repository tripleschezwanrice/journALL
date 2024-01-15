import { getJournals } from "@/data/actions"




const page = async () => {
  
  const Journals = await getJournals()
  console.log(Journals)
 
  return (
    <div className="p-12 justify-center flex flex-wrap gap-2">
{
  Journals.map((journal:any)=>(
    <div key={journal.id} className="flex border-2 w-[45%] justify-between p-2 border-black bg-yellow-300">
        <p className="text-xl font-bold">{journal.title}</p>
        <p>{journal.content.slice(0,20)}...</p>
    </div>
  ))
}
    </div>
  )
}

export default page