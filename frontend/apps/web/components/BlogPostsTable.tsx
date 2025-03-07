'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category_name: string;
  author_name: string;
  created_at: string;
  comment_count: number;
}

interface BlogPostsTableProps {
  posts: BlogPost[];
  totalCount: number;
  currentPage: number;
  nextPage: string | null;
  prevPage: string | null;
}

export default function BlogPostsTable({ 
  posts, 
  totalCount, 
  currentPage,
  nextPage, 
  prevPage 
}: BlogPostsTableProps) {
  const router = useRouter();

  const totalPages = Math.ceil(totalCount / 10);

  const handlePageChange = (pageNumber: number) => {
    router.push(`/blog-posts?page=${pageNumber}`);
  };

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-purple-700">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Author</th>
              <th className="px-4 py-3">Created At</th>
              <th className="px-4 py-3">Comments</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr 
                key={post.id} 
                className="border-b hover:bg-purple-50 cursor-pointer"
              >
                <td className="px-4 py-3">{post.id}</td>
                <td className="px-4 py-3">
                  <Link 
                    href={`/blog-posts/${post.slug}`} 
                    className="text-purple-600 hover:text-purple-800 hover:underline"
                  >
                    {post.title}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    {post.category_name}
                  </span>
                </td>
                <td className="px-4 py-3">{post.author_name}</td>
                <td className="px-4 py-3">{new Date(post.created_at).toLocaleDateString()}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    {post.comment_count}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="flex space-x-2">
          {prevPage && (
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors duration-200 shadow-sm"
            >
              Previous
            </button>
          )}
          {nextPage && (
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors duration-200 shadow-sm"
            >
              Next
            </button>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors duration-200'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}