"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignIn() {
  return (
    <div>
      <div className="bg-slate-300 rounded p-3 mb-3">
        <h3 className="text-xl font-bold border-b-2 border-sky-950 mb-3">
          Unassigned
        </h3>
        <ul>
          <li className="rounded bg-slate-200 p-2 mb-2">
            <div className="flex flex-row justify-between">
              <h4 className="text-lg">Setup a project</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <p className="text-sm">
              Run create-next-app script to set up application skeleton
            </p>
          </li>
          <li className="rounded bg-slate-200 p-2">
            <div className="flex flex-row justify-between">
              <h4 className="text-lg">Create a navigation bar</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <p className="text-sm">
              Create a navigation bar with features link and buttons to sign up
              and log in
            </p>
          </li>
        </ul>
      </div>

      <div className="bg-sky-300 rounded p-3 mb-3">
        <h3 className="text-xl font-bold border-b-2 border-sky-950 mb-3">
          To-do
        </h3>
        <ul>
          <li className="rounded bg-sky-200 p-2">
            <div className="flex flex-row justify-between">
              <h4 className="text-lg">Plan key-features of application</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <p className="text-sm">
              Make a list of 5 most important features of the application to be
              implemented
            </p>
          </li>
        </ul>
      </div>

      <div className="bg-green-300 rounded p-3">
        <h3 className="text-xl font-bold border-b-2 border-sky-950 mb-3">
          Done
        </h3>
        <ul>
          <h3>Nothing here yet</h3>
        </ul>
      </div>
    </div>
  );
}
