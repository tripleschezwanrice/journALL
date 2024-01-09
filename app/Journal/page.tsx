"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';

const JournalList = () => {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        // Make a GET request to the /api/Journals endpoint
        const response = await fetch('/api/Journals');

        // Check if the request was successful (status code 2xx)
        if (response.ok) {
          // Parse the response JSON
          const data = await response.json();
          setJournals(data);
        } else {
          // Handle the error if the request was not successful
          console.error('Failed to fetch journals:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Call the fetchJournals function when the component mounts
    fetchJournals();
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <div className='h-screen bg-black text-yellow-300 mx-auto flex flex-col justify-center items-center'>
      <h2 className='text-3xl font-bold p-4'>Your Journals</h2>
      <div className='flex flex-col gap-4 text-xl'>
        {journals.map((journal:any) => (
          <div key={journal._id} className='border-2 border-yellow-200 p-2'>
            <strong>Title:</strong> {journal.title}, <br />
            <strong>Content:</strong> {journal.content}
          </div>
        ))}
      </div>

        
    <Link className="" href = "/Journal/create">
        
        <div className='border-2 border-yellow-300 text-3xl p-2 my-10 w-fit'>
            Add New
        </div>
        </Link>
    </div>
  );
};

export default JournalList;
