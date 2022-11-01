import React, { FC, useState } from 'react';
import styles from './Post.module.scss';
import Spinner from '../../shared/components/spinner/Spinner';
import { PostModel } from '../model/PostModel';
import { usePostQuery } from '../graphql/post.generated';
import Image from 'next/image';
import { Comments } from './components/comments';
import { CommentsModel } from '../model/CommentsModel';

type IPost = {
    id: number;
};

const Post: FC<IPost> = ({ id }) => {
    const [post, setPost] = useState<PostModel>({
        __typename: '',
        id: '',
        writer: '',
        title: '',
        body: '',
        image: '',
        imageWidth: 0,
        imageHeight: 0,
    });

    const [comments, setComments] = useState<CommentsModel[]>([]);

    const { loading } = usePostQuery({
        variables: { id: id.toString() },
        onCompleted: (data) => {
            setPost({
                ...data?.post?.data?.attributes,
                image: data?.post?.data?.attributes.productImage?.data
                    ?.attributes?.formats?.thumbnail?.url,
                imageWidth:
                    data?.post?.data?.attributes.productImage?.data?.attributes
                        ?.formats?.thumbnail?.width,
                imageHeight:
                    data?.post?.data?.attributes.productImage?.data?.attributes
                        ?.formats?.thumbnail?.height,
            } as PostModel);

            data?.post?.data?.attributes?.comments?.data.forEach((item) => {
                setComments((current) => [
                    ...current,
                    {
                        ...item?.attributes,
                        user: {
                            name: item?.attributes?.users_permissions_user?.data
                                ?.attributes.name,
                        },
                    } as CommentsModel,
                ]);
            });
        },
    });
    //napraviti parser za drilling
    //refaktorisati ovo
    //ne koristit oncomplete
    //namestiti mokove
    //single page(home page)

    if (loading) {
        return <Spinner />;
    }

    const api = 'http://localhost:1337';

    const src = `${api}${post?.image}`;

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{post?.title}</h3>
            <div className={styles.imageWrapper}>
                <Image
                    className={styles.image}
                    loader={() => src}
                    src={src}
                    layout="fill"
                />
            </div>
            <p className={styles.body}>{post?.body}</p>
            {comments.map((item) => (
                <Comments
                    key={item.dateAdded}
                    dateAdded={item.dateAdded}
                    text={item.text}
                    user={item.user}
                />
            ))}
        </div>
    );
};

export default Post;
