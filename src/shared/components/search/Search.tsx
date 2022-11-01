import React from 'react';
import Post from '../../../posts/post/Post';
import styles from './Search.module.scss';

interface SearchI {
    setSearchTerm(value: string): void;
}

const Search: React.FC<SearchI> = ({ setSearchTerm }) => {
    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Search..."
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
            />
        </div>
    );
};

Post.displayName = 'Search';

export default Search;
