

import { getLast6, newJournal } from "@/data/actions";
import Link from "next/link"


const Page = async () => {

const last6 = await getLast6();
console.log(last6)

  return (
    <div className="h-screen w-full flex justify-center">
      <form action={newJournal} className="flex flex-col w-[80%] h-screen py-12 px-4 bg-white rounded  text-3xl">
        <input
          name="title"  
          type="text"
          required
          placeholder="Title"
          className="w-full p-2 mb-4 rounded-none outline-none border-b-2 "
        />
        <textarea
          name="content"
          placeholder="Content"
          required
          className="w-full p-2 mb-4 h-screen text-xl outline-none rounded underline-offset-8 underline"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white  p-2 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </form>


      <div className='w-[20%] mt-12 p-4'>
          <p className="text-xl mb-4">
            Previous Journals
          </p>
          
          {
            last6.map((journal:any)=>(
              <Link href = {`Journals/${journal.id}`} key={journal.id} className="border-2 border-yellow-300 flex justify-between">
                <p>
                  {journal.title}
                </p>
                <p>
                  {journal.content}
                </p>

              </Link>
            ))
          }

      </div>
    </div>
  );
};

export default Page;
