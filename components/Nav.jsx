'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import Image from "next/image"
import Link from "next/link"

import { FaRegUser, FaRegListAlt } from "react-icons/fa"
import { AiOutlineHome } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'

const Nav = () => {

    const [loggedIn, setloggedIn] = useState(true)
    const router = useRouter()

  return (
    <nav className="w-full flex items-center justify-between px-12 py-5 bg-gray-100">
        <div className="flex items-center">
            <Image 
            src='/favicon.ico'
            alt='logo'
            width={50}
            height={50}
            />
            <Link
            href='/'
            className="pl-4 text-xl font-medium"
            >
                Plaster Pro Takeoff
            </Link>
        </div>

        {/* Logged in */}
        { loggedIn ? (

        
        <div className="flex w-96 justify-between">
                <div className="flex flex-col items-center cursor-pointer">
                    <Link 
                    href='/'
                    className="pb-2"
                    >
                        <AiOutlineHome 
                        size={25}
                        />
                    </Link>
                    <p className="text-base">Jobs</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <Link 
                    href='/'
                    className="pb-2"
                    >
                        <FaRegListAlt 
                        size={25}
                        />
                    </Link>
                    <p className="text-base">Orders</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <Link 
                    href='/'
                    className="pb-2"
                    >
                        <FaRegUser 
                        size={25}
                        />
                    </Link>
                    <p className="text-base">Profile</p>
                </div>
                <div className="flex justify-center items-center cursor-pointer bg-red-500 px-3 rounded-md">
                    <button
                    onClick={() => {}}
                    className="pr-2 "
                    >
                        <FiLogOut 
                        size={25}
                        color={'fff'}
                        />
                    </button>
                    <p className="text-base text-white">Log out</p>
                </div>
        </div>
) : (
    <p>Login</p>
)


}
    </nav>
  )
}
export default Nav