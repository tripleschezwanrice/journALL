"use client"

import { getJournalById, updateJournal } from "@/data/actions";
import { useState, useEffect } from "react";

export default function Page({ params }: { params: { id: string } }) {
  // Fetch initial journal data
  const [journal, setJournal] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    const fetchJournal = async () => {
      const journalData = await getJournalById(params.id);
      console.log(journalData[0])
      setJournal({title:journalData[0].title,content:journalData[0].content});
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
    <div className="h-screen w-full flex justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[90%] h-screen py-12 px-4 rounded text-3xl"
      >
        <input
          name="title"
          type="text"
          required
          value={journal.title}
          onChange={handleInputChange}
          placeholder="Title"
          className="w-full p-2 mb-4 rounded-none outline-none border-b-2"
        />
        <textarea
          name="content"
          value={journal.content}
          onChange={handleInputChange}
          placeholder="Content"
          required
          className="w-full p-2 mb-4 h-screen text-xl outline-none rounded underline-offset-8 underline"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
}
