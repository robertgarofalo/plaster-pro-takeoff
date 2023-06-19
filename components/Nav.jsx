'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { signIn, signOut, useSession, getProviders } from "next-auth/react";


import Image from "next/image"
import Link from "next/link"

import { FaRegUser, FaRegListAlt } from "react-icons/fa"
import { AiOutlineHome } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'

const Nav = () => {

    const { data: session } = useSession()
    const [providers, setProviders] = useState(null)
    const [loggedIn, setloggedIn] = useState(true)
    
    const router = useRouter()

    useEffect(() => {
        (async () => {
          const res = await getProviders();
          setProviders(res);
        })();
      }, []);

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
        { session?.user ? (
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
                    href='/orders'
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
                <div className="flex justify-center items-center cursor-pointer bg-red-400 px-3 rounded-md">
                    <button
                    onClick={() => { signOut({ callbackUrl: '/'}) }}
                    className="pr-2 flex"
                    >
                        <FiLogOut 
                        size={25}
                        color={'fff'}
                        />
                    <p className="text-base text-white pl-2">Log out</p>
                    </button>
                </div>
        </div>
) : (
    <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id, { callbackUrl: '/dashboard' });
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
)


}
    </nav>
  )
}
export default Nav