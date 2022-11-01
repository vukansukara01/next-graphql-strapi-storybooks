import {UserModel} from "./UserModel";

interface PostModel {
    id: string;
    title: string;
    body: string;
    user: UserModel;
    __typename: string;
    image?: string;
    imageWidth?: number;
    imageHeight?: number;
}

export type { PostModel };
