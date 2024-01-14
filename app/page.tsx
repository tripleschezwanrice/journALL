
import Stats from "@/components/Stats";
import Link from "next/link";
const {UserStat} = require('@/data/placeholder_data')


export default function Home() {

  const signin = false;
  console.log(UserStat)

  // console.log(exampleJournal);
  return (
    <div className=" h-screen grid justify-center items-center">
      <div className="flex flex-col">
     
     
      {
        signin?
        <>
        <p className="text-5xl font-bold mb-4 underline-offset-4 underline decoration-yellow-400">Why Journalise?</p>
        <p className=" font-bold">Journaling helps you remember stuff easily, be better at expressing yourself and is a healthy habit which is close to everyone who does it.</p>
        <p className="font-bold">In the modern age where we are so accustomed to using computers and not having used a pen and paper in a long time, why not journalise online?</p>
        <div className="flex items-center gap-2 font-bold mt-12">
          <button className="border-2 px-4 py-2 border-black ">Login</button>
          <p>(Log in now to start journaling)</p>
        </div>
        </>
        :
        <div>
         <p className="text-5xl font-bold mb-12">Welcome Back!</p>
         <Stats userStat={UserStat}/>
        </div>
      }
     
      </div>

     

    </div>
  );
}
