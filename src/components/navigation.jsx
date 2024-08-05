"use client";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/solid";
import Link from "next/link";

export default function Navigation() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  const closeMobileMenu = () => {
    setIsMenuVisible(false);
  };
  return (
    <div>
      <nav>
        <ul className="flex flex-row justify-between items-center h-16 border-b-2 border-gray-500">
          <li className="text-2xl">
            <Link href="/" onClick={closeMobileMenu}>
              ollert
            </Link>
          </li>
          <li onClick={toggleMobileMenu}>
            {isMenuVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-8"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </li>
        </ul>
        {isMenuVisible && (
          <ul
            id="mobileMenu"
            className={`flex flex-col duration-300 transition ${
              isMenuVisible ? "h-[100dvh]" : "scale-x-0 h-0"
            }`}
          >
            <li className="h-16 content-center border-b-2 border-gray-500">
              <div className="flex flex-row justify-between">
                <div>Features</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </li>
            <li className="h-16 content-center border-b-2 border-gray-500">
              <div className="flex flex-row justify-between">
                <div>Solutions</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </li>
            <button className="rounded-none bg-indigo-500 text-white p-5 border-2 border-indigo-700 mt-5 text-xl transition ease-in-out delay-150 hover:bg-indigo-600 hover:border-indigo-500 duration-300">
              <Link href="/signIn" onClick={closeMobileMenu}>
                Sign in
              </Link>
            </button>
            <button className="rounded-none border-2 border-indigo-500 text-xl p-5 mt-2">
              Log in
            </button>
          </ul>
        )}
      </nav>
    </div>
  );
}
