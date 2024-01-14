"use client"



import { useParams } from "next/navigation"


const page = () => {
    const {id} = useParams()
  return (
    <div>Journal #{id}</div>
  )
}

export default page