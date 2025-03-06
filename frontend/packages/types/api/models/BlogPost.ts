export interface Category {
  id: number;
  name: string;
  slug: string;
  created_at: string;
}

export interface Comment {
  id: number;
  content: string;
  author: number;
  author_name: string;
  created_at: string;
}

export interface BlogPostDetail {
  id: number;
  title: string;
  slug: string;
  content: string;
  category: Category;
  author: number;
  author_name: string;
  created_at: string;
  updated_at: string;
  comments: Comment[];
}

export type BlogPost = {
  id: number
  title: string
  slug: string
  category: number
  category_name: string
  author: number
  author_name: string
  created_at: string
  comment_count: number
}

export type BlogPostList = {
  count: number
  next: string | null
  previous: string | null
  results: BlogPost[]
}

// New type for comment list
export type CommentList = {
  count: number
  next: string | null
  previous: string | null
  results: Comment[]
}

export type PostComment = {
  post_slug : string
  content : string
}