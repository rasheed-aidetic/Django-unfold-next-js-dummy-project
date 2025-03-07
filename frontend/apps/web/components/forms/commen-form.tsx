'use client';

import { postCommentAction } from '@/actions/post-comment-action';
import { fieldApiError } from '@/lib/forms';
import { postCommentFormSchema } from '@/lib/validation';
import { FormHeader } from '@frontend/ui/forms/form-header';
import { SubmitField } from '@frontend/ui/forms/submit-field';
import { SuccessMessage } from '@frontend/ui/messages/success-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export type CommentFormSchema = z.infer<typeof postCommentFormSchema>

export interface Comment {
  id: number;
  author_name: string;
  content: string;
  created_at: string;
}

export default function CommentForm({ 
  postSlug, 
  onSubmitHandler,
  onCommentAdded
}: { 
  postSlug: string, 
  onSubmitHandler: typeof postCommentAction,
  onCommentAdded?: (comment: Comment) => void
}) {
  const [success, setSuccess] = useState<boolean>(false);

  const { formState, handleSubmit, register, setError, reset } = 
    useForm<CommentFormSchema>({
      resolver: zodResolver(postCommentFormSchema),
      defaultValues: async () => {
        return {
          content: '',
          post_slug: postSlug
        }
    }});

  return (
    <>
      <FormHeader
        title="Add a Comment"
        description={`Commenting on post: ${postSlug}`}
      />

      <form
        method="post"
        onSubmit={handleSubmit(async (data) => {
          console.log(data, "dataatatattattt");
          
          const res = await onSubmitHandler(data);

          if (res !== true && typeof res !== 'boolean') {
            setSuccess(false);
            fieldApiError('comment', 'content', res, setError);
          } else {
            setSuccess(true);
            // Reset form after successful submission
            reset();
            
            // If onCommentAdded callback provided, call it with the new comment
            if (onCommentAdded) {
              // Create a mock comment with current data
              // You might need to adjust this based on your actual data structure
              const newComment: Comment = {
                id: Date.now(), // Temporary ID
                author_name: "You", // Or get from session if available
                content: data.content,
                created_at: new Date().toISOString()
              };
              onCommentAdded(newComment);
            }
            
            // Hide success message after 3 seconds
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
          }
        })}
      >
        {success && (
          <SuccessMessage>Comment has been successfully added</SuccessMessage>
        )}

        <div className="mb-4">
          <label 
            htmlFor="comment" 
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Comment
          </label>
          <textarea
            id="comment"
            {...register('content')}
            placeholder="Write your comment here..."
            className="w-full p-3 border rounded-lg"
            rows={4}
          />
          {formState.errors.content && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.content.message}
            </p>
          )}
        </div>

        <SubmitField isLoading={formState.isSubmitting}>
          Post Comment
        </SubmitField>
      </form>
    </>
  );
}