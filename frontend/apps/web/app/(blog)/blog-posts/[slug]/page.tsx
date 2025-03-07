// This component serves as a server component wrapper 
// for the client component with initial data
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getApiClient } from "@/lib/api";
import BlogPostDetail from "./BlogPostDetailClient"; // Import the client component

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const session = await getServerSession(authOptions);
  const apiClient = await getApiClient(session);

  // Fetch blog post details
  const post = await apiClient.blogs.GetBlogPost(params.slug);
  
  // Pass the fetched data as props to the client component
  return <BlogPostDetail initialPost={post} />;
}