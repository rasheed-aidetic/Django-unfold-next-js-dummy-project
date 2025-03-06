/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PatchedUserCurrent } from '../models/PatchedUserCurrent'
import type { UserChangePassword } from '../models/UserChangePassword'
import type { UserCreate } from '../models/UserCreate'
import type { UserCurrent } from '../models/UserCurrent'

import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'
import { BlogPostDetail, BlogPostList, CommentList, PostComment } from '../models/BlogPost'

export class BlogService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns BlogPostList
   * @throws ApiError
   */
  public ListBlogPosts(page : number): CancelablePromise<BlogPostList> {
    return this.httpRequest.request({
      method: 'GET',
      url: `/api/blog/posts/?page=${page}`,
    })
  }

  public GetBlogPost(slug : string): CancelablePromise<BlogPostDetail> {
    return this.httpRequest.request({
      method: 'GET',
      url: `/api/blog/posts/${slug}/`,
    })
  }


  public ListComments(slug : string): CancelablePromise<CommentList> {
    return this.httpRequest.request({
      method: 'GET',
      url: `/api/blog/posts/${slug}/comments/`,
    })
  }

  public postComment(
    requestBody: PostComment
  ): CancelablePromise<void> {
    console.log(requestBody, "bodyyydydydydyydydydy");
    
    return this.httpRequest.request({
      method: 'POST',
      url: `/api/blog/posts/${requestBody.post_slug}/comments/`,
      body: requestBody,
      mediaType: 'application/json'
    })
  }

//   /**
//    * @param requestBody
//    * @returns void
//    * @throws ApiError
//    */


//   /**
//    * @returns void
//    * @throws ApiError
//    */
//   public usersDeleteAccountDestroy(): CancelablePromise<void> {
//     return this.httpRequest.request({
//       method: 'DELETE',
//       url: '/api/users/delete-account/'
//     })
//   }



//   /**
//    * @param requestBody
//    * @returns UserCurrent
//    * @throws ApiError
//    */
//   public usersMeUpdate(
//     requestBody: UserCurrent
//   ): CancelablePromise<UserCurrent> {
//     return this.httpRequest.request({
//       method: 'PUT',
//       url: '/api/users/me/',
//       body: requestBody,
//       mediaType: 'application/json'
//     })
//   }

//   /**
//    * @param requestBody
//    * @returns UserCurrent
//    * @throws ApiError
//    */
//   public usersMePartialUpdate(
//     requestBody?: PatchedUserCurrent
//   ): CancelablePromise<UserCurrent> {
//     return this.httpRequest.request({
//       method: 'PATCH',
//       url: '/api/users/me/',
//       body: requestBody,
//       mediaType: 'application/json'
//     })
//   }
}
