import {UserModel} from "./UserModel";

interface CardModel {
    user: UserModel;
    id: number;
    title: string;
    body: string;
    handleOpenPost(id: number): void;
}

export type { CardModel };
