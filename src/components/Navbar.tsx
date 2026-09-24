
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-black">
      <div className="navbar container mx-auto shadow-sm">

    
        <div className="navbar-start">

      
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/workouts">Workouts</Link>
              </li>

              <li>
                <Link href="/plans">My Plan</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="FITLOG logo"
              height={20}
              width={20}
            />

            <Link
              href="/"
              className="font-bold tracking-wide text-white"
            >
              FITLOG
            </Link>
          </div>
        </div>

    
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">

    
            <li>
              <Link
                href="/workouts"
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  isActive("/workouts")
                    ? "bg-lime-400 text-black hover:bg-lime-400"
                    : "text-gray-400 hover:bg-transparent hover:text-white"
                }`}
              >
                Workouts
              </Link>
            </li>

            {/* My Plan */}
            <li>
              <Link
                href="/Plans"
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  isActive("/Plans")
                    ? "bg-lime-400 text-black hover:bg-lime-400"
                    : "text-gray-400 hover:bg-transparent hover:text-white"
                }`}
              >
                My Plan
              </Link>
            </li>

          </ul>
        </div>

        <div className="navbar-end gap-6 text-sm">

          <div className="flex items-center gap-2">
            <span className="text-gray-400">Plan</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-xs font-semibold text-black">
              0
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-400">Saved</span>

            <span className="font-medium text-gray-200">
              0
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Navbar;

