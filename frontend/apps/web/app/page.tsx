import { PagesOverview } from '@/components/pages-overview'
import { UserSession } from '@/components/user-session'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-2">My Blog</h1>
        <p className="text-lg text-gray-600">Welcome to your personal blogging platform</p>
      </header>

      <div className="bg-purple-50 rounded-lg p-6 shadow-sm border border-purple-100">
        <UserSession />
      </div>

      <div className="my-10 border-t border-purple-200 pt-6">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Latest Posts</h2>
        <PagesOverview />
      </div>
    </div>
  )
}