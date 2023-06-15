'use client'
import Image from "next/image"

import Link from "next/link"

import { FaRegUser, FaRegListAlt, FaHome } from "react-icons/fa"
import { AiOutlineHome } from 'react-icons/ai'

const Nav = () => {
  return (
    <nav className="w-full flex items-center justify-between px-12 py-5 bg-gray-100">
        <div className="flex items-center">
            <Image 
            src='/favicon.ico'
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

        <div className="flex w-64 justify-between">
                <div className="flex flex-col items-center cursor-pointer">
                    <Link 
                    href='/'
                    className="pb-2"
                    >
                        <AiOutlineHome 
                        size={30}
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
                        size={30}
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
                        size={30}
                        />
                    </Link>
                    <p className="text-base">Profile</p>
                </div>
        </div>
    </nav>
  )
}
export default Nav