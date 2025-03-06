'use server'

import { getApiClient } from '@/lib/api'
import { authOptions } from '@/lib/auth'
import type { postCommentFormSchema } from '@/lib/validation'
import { ApiError, type PostCommentError } from '@frontend/types/api'
import { getServerSession } from 'next-auth'
import type { z } from 'zod'

export type postCommentFormSchema = z.infer<typeof postCommentFormSchema>

export async function postCommentAction(
  data: postCommentFormSchema
): Promise<any> {
  const session = await getServerSession(authOptions)

  try {
    const apiClient = await getApiClient(session)
    await apiClient.blogs.postComment(data)

    return true
  } catch (error) {
    if (error instanceof ApiError) {
      return error.body as PostCommentError
    }
  }

  return false
}
