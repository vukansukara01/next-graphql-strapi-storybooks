import {UserCommentsModel} from "./UserCommentsModel";

interface CommentsModel {
    user: UserCommentsModel;
    dateAdded: string;
    text: string;
}

export type { CommentsModel };


