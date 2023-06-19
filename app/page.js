'use client'

import { useState, useEffect, useReducer } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const Home = () => {

  const { data: session } = useSession()
  const router = useRouter()

  // useEffect(() => {
  //   if(session?.user){
  //     router.push('/dashboard')
  //   }
  // },[])

  return (
    <div>
      <h3>Home</h3>
    </div>
  )
}
export default Home