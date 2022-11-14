import React, { FC, useMemo, useState } from 'react';
import styles from './Posts.module.scss';
import { Card } from './components/Card';
import { useRouter } from 'next/router';
import Search from '../shared/components/search/Search';
import Spinner from '../shared/components/spinner/Spinner';
import {Button, Modal, Pagination} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddModal from "./components/AddModal/AddModal";
import {usePostsQuery} from "./graphql/posts.generated";

const PostsPage: FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { loading, data } = usePostsQuery();
    console.log(data);

    const filteredList = useMemo(() => {
        const filter = data?.posts?.data?.filter((item) =>
            item?.attributes?.users_permissions_user?.data?.attributes?.name
                .toLowerCase()
                .startsWith(searchTerm.toLowerCase())
        );

        const handleOpenPost = (id: number) => router.push(`posts/${id}`);

        return filter?.map((card) => {
            return (
                <Card
                    key={card.attributes?.title}
                    body={card.attributes?.body}
                    id={+card.id}
                    title={card.attributes?.title}
                    handleOpenPost={handleOpenPost}
                    user={card.attributes?.users_permissions_user?.data?.attributes?.name}
                />
            );
        });
    }, [searchTerm, data]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className={styles.container}>
            <nav>
                <Search setSearchTerm={setSearchTerm} />
                <Button variant="contained" endIcon={<AddCircleIcon />} onClick={handleOpen}>Add new post</Button>
            </nav>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            ><AddModal setOpen={setOpen} /></Modal>
            <div className={styles.cards}>{filteredList}</div>
            <Pagination className={styles.pagination} count={3} color="primary" sx={{color: 'white'}} shape='rounded' />
        </div>
    );
};

export default PostsPage;
