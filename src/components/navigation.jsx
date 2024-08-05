"use client";
import { useState } from "react";
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
        <ul className="flex h-16 flex-row items-center justify-between border-b-2 border-gray-500">
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
        <ul
          id="mobileMenu"
          className={`flex flex-col ${
            isMenuVisible ? "transition duration-200 h-dvh" : "h-0 scale-y-0"
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
          <button className="mt-5 rounded-none border-2 border-indigo-700 bg-indigo-500 p-5 text-xl text-white transition delay-150 duration-300 ease-in-out hover:border-indigo-500 hover:bg-indigo-600">
            <Link href="/signIn" onClick={closeMobileMenu}>
              Sign in
            </Link>
          </button>
          <button className="mt-2 rounded-none border-2 border-indigo-500 p-5 text-xl">
            Log in
          </button>
        </ul>
      </nav>
    </div>
  );
}
