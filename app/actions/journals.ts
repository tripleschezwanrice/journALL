// export const fetchJournals = async () => {
//     try {
//       // Make a GET request to the /api/Journals endpoint
//       console.log("making req")
//       const response = await fetch('/api/Journals');
//         console.log("ststus is :",response.status)
//       // Check if the request was successful (status code 2xx)
//       if (response.ok) {
//         // Parse the response JSON
//         const data = await response.json();
//         return data
//       } else {
//         // Handle the error if the request was not successful
//         console.error('Failed to fetch journals:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

  // lib/api.js


// export const fetchJournals = async () => {
 
//   try {

//     const journals = await import('../api/Journals/route')
//     const response = await (await journals.GET()).json() 

//     // if (!response.ok) {
//     //   throw new Error(`Failed to fetch journals: ${response.statusText}`);
//     // }

//     return response;
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// };


