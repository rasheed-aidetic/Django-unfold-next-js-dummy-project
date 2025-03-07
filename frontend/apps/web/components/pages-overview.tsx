'use client'

import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export function SignInLink() {
  return (
    <button
      type="button"
      onClick={() => signIn()}
      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors duration-200 shadow-sm"
    >
      Login
    </button>
  )
}

export function SignOutLink() {
  return (
    <button
      type="button"
      onClick={() => signOut()}
      className="px-4 py-2 bg-white border border-purple-600 text-purple-600 hover:bg-purple-50 font-medium rounded-md transition-colors duration-200 shadow-sm"
    >
      Logout
    </button>
  )
}

export function PagesOverview() {
  return (
    <div className="bg-white rounded-lg shadow-md border border-purple-100 p-6">
      <h2 className="text-xl font-semibold text-purple-800 mb-6">Site Navigation</h2>
      
      <ul className="flex flex-col gap-8">
        <li className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <span className="w-40 font-medium text-gray-700 bg-purple-50 px-3 py-1 rounded-md">Authenticated Pages</span>

          <ul className="flex flex-row gap-6 flex-wrap">
            <li>
              <Link href="/blog-posts" className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium rounded-md transition-colors duration-200 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Blog Posts
              </Link>
            </li>
          </ul>
        </li>

        <li className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <span className="w-40 font-medium text-gray-700 bg-purple-50 px-3 py-1 rounded-md">Account Access</span>

          <ul className="flex flex-row gap-4 flex-wrap">
            <li>
              <SignInLink />
            </li>

            <li>
              <a href="/register" className="px-4 py-2 bg-purple-200 hover:bg-purple-300 text-purple-800 font-medium rounded-md transition-colors duration-200 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Register
              </a>
            </li>

            <li>
              <SignOutLink />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}