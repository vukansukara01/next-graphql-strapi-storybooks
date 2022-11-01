import React, { createContext, FC, useState } from 'react';
import { CardModel } from '../model/CardModel';

type IPostsChildren = {
    children: React.ReactNode;
};

type IPostsContext = {
    postsList: CardModel[];
    setPostsList: (list: CardModel[]) => void;
};

export const PostsContext = createContext<IPostsContext>({
    postsList: [],
    setPostsList: (list: CardModel[]) => {},
});

const PostsContextProvider: FC<IPostsChildren> = ({ children }) => {
    const [postsList, setPostsList] = useState<CardModel[]>([]);

    const setPostsListHandler = (list: CardModel[]) => {
        setPostsList(list);
    };

    const contextValue: IPostsContext = {
        postsList: postsList,
        setPostsList: setPostsListHandler,
    };

    return (
        <PostsContext.Provider value={contextValue}>
            {children}
        </PostsContext.Provider>
    );
};

export default PostsContextProvider;
