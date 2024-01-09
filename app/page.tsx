import Link from "next/link";


export default function Home() {
  // console.log(exampleJournal);
  return (
    <div className="h-screen bg-black text-yellow-300 items-center flex flex-col  gap-16  text-6xl justify-center">
     
      Explore Your Journals
      <Link href = "/Journal" className="text-3xl border-2 border-yellow-300 p-4">
      Explore
      </Link>
    </div>
  );
}
