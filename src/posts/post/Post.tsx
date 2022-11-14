import React, { FC } from 'react';
import styles from './Post.module.scss';
import Spinner from '../../shared/components/spinner/Spinner';
import { usePostQuery } from '../graphql/post.generated';
import Image from 'next/image';
import { Comments } from './components/comments';
import graphqlDataParser from "../../core/utils/graphqlDataParser";

type IPost = {
    id: number;
};

const Post: FC<IPost> = ({ id }) => {
    const { loading, data } = usePostQuery({
        variables: { id: id.toString() },
    });

    if (loading) {
        return <Spinner />;
    }

    console.log(data)

    const postData = data?.post?.data?.attributes;

    const src = `${process.env.NEXT_PUBLIC_STRAPI_API}${postData.productImage?.data?.attributes?.formats?.thumbnail?.url}`;

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                {postData.title}
            </h3>
            {postData.productImage?.data?.attributes?.formats?.thumbnail?.url && <div className={styles.imageWrapper}>
                <Image
                    className={styles.image}
                    loader={() => src}
                    src={src}
                    layout="fill"
                />
            </div>}
            <p className={styles.body}>{postData.body}</p>
            {postData.comments?.data.map((item) => (
                <Comments
                    key={item?.attributes.dateAdded}
                    dateAdded={item?.attributes.dateAdded}
                    text={item?.attributes.text}
                    user={
                        item?.attributes?.users_permissions_user?.data
                            ?.attributes?.name
                    }
                />
            ))}
        </div>
    );
};

export default Post;
