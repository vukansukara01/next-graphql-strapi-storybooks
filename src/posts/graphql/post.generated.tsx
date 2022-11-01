import type * as Types from '../../types';

import { gql } from '@apollo/client';
import { PostsItemsFragmentDoc } from './PostsFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PostQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']>;
}>;


export type PostQuery = { __typename?: 'Query', post?: { __typename?: 'PostEntityResponse', data?: { __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', title: string, body: string, productImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null } | null } | null } | null, users_permissions_user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', name: string } | null } | null } | null, comments?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', attributes?: { __typename?: 'Comment', text: string, dateAdded: any, users_permissions_user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', name: string } | null } | null } | null } | null }> } | null } | null } | null } | null };


export const PostDocument = /*#__PURE__*/ gql`
    query Post($id: ID) {
  post(id: $id) {
    data {
      id
      attributes {
        ...PostsItems
        productImage {
          data {
            attributes {
              formats
            }
          }
        }
        users_permissions_user {
          data {
            attributes {
              name
            }
          }
        }
        comments {
          data {
            attributes {
              text
              dateAdded
              users_permissions_user {
                data {
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    ${PostsItemsFragmentDoc}`;
export function usePostQuery(baseOptions?: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;