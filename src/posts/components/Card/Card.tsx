import { FC } from 'react';
import styles from './Card.module.scss';
import { CardModel } from '../../model/CardModel';

const Card: FC<CardModel> = ({ user, id, title, body, handleOpenPost }) => {

    return (
        <div
            data-testid="card"
            className={styles.container}
            onClick={() => handleOpenPost(id)}>
            <div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.body}>{body.substring(0, 200)} ...</p>
            </div>
            <p className={styles.userName}>{user}</p>
        </div>
    );
};

export default Card;
