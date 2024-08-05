"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="flex max-w-full flex-col items-center justify-center">
      <div className="flex flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
          />
        </svg>
        <h2 className="text-3xl">Taskager</h2>
      </div>
      <div className="mt-3 flex  w-full flex-col items-center">
        <p className="text-lg font-bold">Sign up to continue</p>
        <form action={""}>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-3 block w-full rounded-none border border-gray-300 p-4 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          />
          <p className="mt-2 text-sm text-gray-500">
            By signing up, I accept the Terms of Service and acknowledge the
            Privacy Policy.
          </p>

          <button className="mt-5 w-full rounded-none border-2 border-indigo-700 bg-indigo-500 p-5 text-xl text-white transition delay-150 duration-300 ease-in-out hover:border-indigo-500 hover:bg-indigo-600">
            <Link href="/signIn">Sign up</Link>
          </button>
        </form>

        <p className="mt-2 text-sm text-gray-500">
          Already have an account?
          <Link href="/logIn" className="text-indigo-500">
            {" "}
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
