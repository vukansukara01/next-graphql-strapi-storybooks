import React, { FC, useMemo, useState } from 'react';
import styles from './Posts.module.scss';
import { Card } from './components/Card';
import { useRouter } from 'next/router';
import Search from '../shared/components/search/Search';
import { PostModel } from './model/PostModel';
import Spinner from '../shared/components/spinner/Spinner';
import { usePostsQuery } from './graphql/posts.generated';

const PostsPage: FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [list, setList] = useState<PostModel[]>([]);
    const router = useRouter();

    const { loading } = usePostsQuery({
        onCompleted: (data) =>  {
            //izbrisati on complete
            data?.posts?.data.forEach((item) => {
                setList((current) => [
                    ...current,
                    {
                        ...item?.attributes,
                        id: item.id,
                        user: {name: item?.attributes?.users_permissions_user?.data.attributes.name},
                    } as PostModel,
                ]);
            });
        },
    });

    //refaktorisati

    const filteredList = useMemo(() => {
        const filter = list.filter((item: PostModel) => item?.user.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        //mokovati listu

        return filter?.map((card: PostModel) => {

            return (
                <Card
                    key={card.id}
                    body={card.body}
                    id={1}
                    title={card.title}
                    handleOpenPost={() => {
                        router.push(`posts/${card.id}`);
                    }}
                    user={card.user}
                />
            );
        });
    }, [searchTerm, list]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className={styles.container}>
            <Search setSearchTerm={setSearchTerm} />
            {filteredList}
        </div>
    );
};

export default PostsPage;
