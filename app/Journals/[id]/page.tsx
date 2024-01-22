"use client"

import { deleteJournal, getJournalById, updateJournal } from "@/data/actions";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";


export default function Page({ params }: { params: { id: string } }) {
  // Fetch initial journal data
  const [journal, setJournal] = useState({
    title: "",
    content: "",
    createdat:""
  });



  useEffect(() => {
    const fetchJournal = async () => {
      const journalData = await getJournalById(params.id);
      console.log(journalData[0])
      setJournal({title:journalData[0].title,content:journalData[0].content,createdat:journalData[0].createdat});
    };

    fetchJournal();
  }, [params.id]);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJournal((prevJournal) => ({
      ...prevJournal,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Update the journal in the database
    await updateJournal(params.id, journal);

    // Optionally, you can redirect or show a success message here
  };

  return (
    <div className="h-screen w-full flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[90%] h-screen py-12 px-4 rounded text-3xl"
      >
         <div className="flex gap-4">
        <div className="flex border-2 border-white items-center justify-between w-full gap-4">
        <input
          name="title"
          type="text"
          required
          value={journal.title}
          onChange={handleInputChange}
          placeholder="Title"
          className=" p-2 rounded-none outline-none bg-transparent w-[80%]"
        />
        
        <p className="text-xl w-fit p-2">
         {journal.createdat.toString().slice(4,15)}
        </p>
      

        </div>
        <TrashIcon className="w-12 hover:text-red-600" onClick={()=>{deleteJournal(params.id)}}/>
       

        </div>

        <textarea
          name="content"
          value={journal.content}
          onChange={handleInputChange}
          placeholder="Content"
          required
          className="w-full p-2 mb-4 bg-transparent h-screen text-xl outline-none rounded border-2 border-white mt-2"
        />
        <button
          type="submit"
          className="bg-purple-400 text-white p-2 rounded hover:bg-purple-500"
        >
          Save
        </button>
      </form>
    </div>
  );
}
