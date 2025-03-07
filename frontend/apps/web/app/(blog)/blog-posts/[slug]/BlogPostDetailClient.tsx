'use client';

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getApiClient } from "@/lib/api";
import Link from "next/link";
import CommentForm, { Comment } from "@/components/forms/commen-form";
import { postCommentAction } from "@/actions/post-comment-action";
import { useState } from "react";

// Props interface for the component
interface BlogPostDetailProps {
  initialPost: {
    id: number;
    slug: string;
    title: string;
    content: string;
    author_name: string;
    created_at: string;
    category: {
      name: string;
    };
    comments: Comment[];
  };
}

// Client component to handle the post details and comments
export default function BlogPostDetail({ initialPost }: BlogPostDetailProps) {
  // State to manage comments including any newly added ones
  const [comments, setComments] = useState<Comment[]>(initialPost.comments);

  // Handler for when a new comment is added
  const handleCommentAdded = (newComment: Comment) => {
    setComments(prevComments => [newComment, ...prevComments]);
  };

  return (
    <div className="bg-purple-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-800">Article View</h1>
          <Link
            href="/blog-posts"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors duration-200 shadow-sm flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Posts
          </Link>
        </div>
        
        <article className="bg-white shadow-lg rounded-lg overflow-hidden border border-purple-100">
          <header className="bg-purple-700 p-6 text-white">
            <h1 className="text-3xl font-bold mb-4">
              {initialPost.title}
            </h1>
            <div className="flex flex-wrap justify-between text-sm text-purple-100">
              <div>
                <span>By {initialPost.author_name}</span>
                <span className="mx-2">|</span>
                <span>{new Date(initialPost.created_at).toLocaleDateString()}</span>
              </div>
              <span className="mt-2 md:mt-0 bg-purple-600 px-3 py-1 rounded-full text-white text-xs">
                {initialPost.category.name}
              </span>
            </div>
          </header>

          <div className="p-6">
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: initialPost.content }}
            />
          </div>
          
          <div className="p-6 border-t border-purple-100">
            <h2 className="text-xl font-semibold mb-4 text-purple-800">Leave a Comment</h2>
            <CommentForm
              postSlug={initialPost.slug}
              onSubmitHandler={postCommentAction}
              onCommentAdded={handleCommentAdded}
            />
          </div>
          
          <div className="p-6 bg-purple-50">
            <h2 className="text-xl font-semibold mb-4 text-purple-800">
              Comments ({comments.length})
            </h2>

            {comments.length === 0 ? (
              <p className="text-gray-600 italic">Be the first to comment on this post!</p>
            ) : (
              comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-white p-4 rounded-lg shadow-sm mb-4 border-l-4 border-purple-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-purple-900">{comment.author_name}</h3>
                    <span className="text-sm text-gray-500">
                      {new Date(comment.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700">{comment.content}</p>
                </div>
              ))
            )}
          </div>
        </article>
      </div>
    </div>
  );
}