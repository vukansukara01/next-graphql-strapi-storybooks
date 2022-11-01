import type * as Types from '../../types';

import { gql } from '@apollo/client';
export type PostsItemsFragment = { __typename?: 'Post', title: string, body: string };

export const PostsItemsFragmentDoc = /*#__PURE__*/ gql`
    fragment PostsItems on Post {
  title
  body
}
    `;