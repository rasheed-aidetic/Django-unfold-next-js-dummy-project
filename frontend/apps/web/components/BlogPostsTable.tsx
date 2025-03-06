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
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
                className="border-b hover:bg-gray-100 cursor-pointer"
              >
                <td className="px-4 py-3">{post.id}</td>
                <td className="px-4 py-3">
                  <Link 
                    href={`/blog-posts/${post.slug}`} 
                    className="hover:text-blue-600 hover:underline"
                  >
                    {post.title}
                  </Link>
                </td>
                <td className="px-4 py-3">{post.category_name}</td>
                <td className="px-4 py-3">{post.author_name}</td>
                <td className="px-4 py-3">{new Date(post.created_at).toLocaleDateString()}</td>
                <td className="px-4 py-3">{post.comment_count}</td>
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
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Previous
            </button>
          )}
          {nextPage && (
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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