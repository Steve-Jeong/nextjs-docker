import React from "react";
import { MdDirectionsCar } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { IoLogInOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";
import { getServerSession } from 'next-auth';
import { authOptions } from "./api/auth/authOptions/authOptions";

const NavBar = async () => {
  const session = await getServerSession(authOptions)

  return (
    
    <div className="flex h-16 items-center justify-between bg-[#C6CAE7] px-5">
      <Link href="/">
        <div className="flex items-center gap-3">
          <div>
            <MdDirectionsCar size={40} color="581C87" />
          </div>
          <div className="text-bold text-sm font-extrabold tracking-tighter text-purple-900 2xs:text-xl xs:text-2xl sm:text-3xl">
            Where is my car?
          </div>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <div>
          {session 
            ?
              <div className="flex gap-x-2 items-center text-[">
              {session.user!.name}
                <Link
                  href="/api/auth/signout"
                  className="flex flex-col items-center"
                >
                  <IoLogOutOutline size={15} color="581C87" />
                  <div className="text-xs text-purple-900">Logout</div>
                </Link>
              </div>
            :
              <Link
                  href="/auth/login"
                  className="flex flex-col items-center"
                >
                <IoLogInOutline size={20} color="581C87" />
                <div className="text-xs text-purple-900">Login</div>
              </Link>
          }
          {/* <Link
            href="/api/auth/user-dashboard"
            className="flex flex-col items-center"
          >
            <FaUser size={20} color="581C87" />
            <div className="text-xs">User Name</div>
          </Link> */}
        </div>
        <div>
          <LuMenu size={40} color="581C87" />
        </div>
      </div>
    </div>
    
  );
};

export default NavBar;
