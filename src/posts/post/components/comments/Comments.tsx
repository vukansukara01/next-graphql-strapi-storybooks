import React, { FC } from 'react';
import styles from './Comments.module.scss';
import { CommentsModel } from '../../../model/CommentsModel';

const Comments: FC<CommentsModel> = ({ user, dateAdded, text }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.avatar}></div>
                </div>
                <div className={styles.right}>
                    <div className={styles.nameDate}>
                        <h3>{user.name}</h3>
                        <p>{dateAdded}</p>
                    </div>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Comments;
