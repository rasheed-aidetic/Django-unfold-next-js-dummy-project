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
    <div className="min-h-screen bg-gray-100 p-6">

            <div className="">
            <Link href="/" className="text-white btn bg-blue-500 flex justify-center">
              Home
            </Link>
            </div>
    
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className="text-3xl font-bold text-center text-gray-800 py-6 border-b">
          Blog Posts
        </h1>
        <BlogPostsTable 
          posts={results}
          totalCount={count}
          currentPage={page}
          nextPage={next}
          prevPage={previous}
        />
      </div>
    </div>
  );
}