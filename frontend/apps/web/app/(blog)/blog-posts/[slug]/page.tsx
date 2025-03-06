import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getApiClient } from "@/lib/api";
import Link from "next/link";
import CommentForm from "@/components/forms/commen-form";
import { postCommentAction } from "@/actions/post-comment-action";

export default async function BlogPostDetail({
  params,
}: {
  params: { slug: string };
}) {
  const session = await getServerSession(authOptions);
  const apiClient = await getApiClient(session);

  // Fetch blog post details
  const post = await apiClient.blogs.GetBlogPost(params.slug);
  console.log(post, post.title, post.id, post.content);

  // Fetch comments for this post
  //   const comments = await apiClient.blogs.ListComments(params.slug);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="">
        <Link
          href="/blog-posts"
          className="text-white btn bg-blue-500 flex justify-center"
        >
          back
        </Link>
      </div>
      <article className="bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-gray-100 p-6 border-b">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>
          <div className="flex justify-between text-sm text-gray-600">
            <div>
              <span>By {post.author_name}</span>
              <span className="mx-2">|</span>
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
            </div>
            <span className="text-gray-500">
              Category: {post.category.name}
            </span>
          </div>
        </header>

        <div className="p-6">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        <div className="p-6">
          <CommentForm
            postSlug={post.slug}
            onSubmitHandler={postCommentAction}
          />
        </div>
        <div className="p-6 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            Comments ({post.comments.length})
          </h2>

          {post.comments?.map((comment) => (
            <div
              key={comment.id}
              className="bg-white p-4 rounded-lg shadow-sm mb-4"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{comment.author_name}</h3>
                <span className="text-sm text-gray-500">
                  {new Date(comment.created_at).toLocaleDateString()}
                </span>
              </div>
              <p>{comment.content}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
