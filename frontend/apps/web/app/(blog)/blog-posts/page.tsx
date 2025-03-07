import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getApiClient } from "@/lib/api";
import BlogPostsTable from "@/components/BlogPostsTable";
import Link from "next/link";

export default async function BlogPosts({ searchParams }: { searchParams: { page?: string } }) {
  const session = await getServerSession(authOptions);
  const apiClient = await getApiClient(session);
  const page = parseInt(searchParams.page || '1', 10);
  
  const { results, count, next, previous } = await apiClient.blogs.ListBlogPosts(page);

  return (
    <div className="min-h-screen bg-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-purple-800">Your Blog Collection</h1>
          <Link href="/" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors duration-200 shadow-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-14 0l2 2m0 0l7 7 7-7m-14 0l2-2" />
            </svg>
            Home
          </Link>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-purple-100">
          <div className="bg-purple-700 py-4 px-6">
            <h2 className="text-xl font-semibold text-white">
              Blog Posts ({count})
            </h2>
            <p className="text-purple-100 text-sm mt-1">
              Browse, read, and manage your collection of blog posts
            </p>
          </div>
          
          <BlogPostsTable 
            posts={results}
            totalCount={count}
            currentPage={page}
            nextPage={next}
            prevPage={previous}
          />
        </div>
      </div>
    </div>
  );
}