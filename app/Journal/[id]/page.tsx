const { exampleJournal } = require("@/data/placeholder_data");

const page = ({ params }: { params: { id: string } }) => {
    const id = params.id
    const journal = exampleJournal[id]
  return (
    <div className="h-screen flex font-medium flex-col mx-auto  text-left justify-center bg-black text-yellow-300 gap-4">
      <p className="font-bold"> {journal.title}</p>
      <p>{journal.content}</p>
      <p>Created At: {journal.createdAt}</p>
      <p>Updated At: {journal.updatedAt}</p>
    </div>
  )
}

export default page