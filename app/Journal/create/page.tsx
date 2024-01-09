"use client"

import { useRouter} from "next/navigation";


const Page = () => {
  const router = useRouter();
  const newJournal = async (event:any) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const title = formData.get('title');
      const content = formData.get('content');

      // Create a new journal object with title, content, createdAt, and updatedAt
      const journalData = {
        title,
        content,
        createdAt: new Date().toISOString(), // Current timestamp
        updatedAt: new Date().toISOString(), // Current timestamp
      };

      // Make a POST request to the /api/Journals endpoint
      const response = await fetch('/api/Journals', {
        method: 'POST',
        headers: {
          // No need to set Content-Type when using FormData
        },
        body: JSON.stringify(journalData), // JSON.stringify is not needed for FormData
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        console.log('Journal created successfully');
        router.push('/Journal');
        // You can perform additional actions here if needed
      } else {
        // Handle the error if the request was not successful
        console.error('Failed to create journal:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="h-screen bg-black grid items-center justify-center">
    <form onSubmit={newJournal} className="flex flex-col gap-3 text-xl text-white p-4">
      <input type="text" name="title" placeholder="title" className="border-2 border-yellow-300 bg-black outline-none p-4 min-w-[512px]" />
      <textarea rows={10} name="content" placeholder="content"  className="border-2 border-yellow-300 bg-black outline-none p-4"/>
      <button type="submit" className="bg-black text-yellow-300 border-2 border-yellow-300 p-2">Submit</button>
    </form>
    </div>
  );
};

export default Page;
