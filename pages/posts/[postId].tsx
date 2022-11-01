import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Post } from '../../src/posts/post';

const Posts: FC = () => {
    const router = useRouter();
    const id = parseInt(router.query.postId as string);

    return <Post id={id} />;
};

export default Posts;
