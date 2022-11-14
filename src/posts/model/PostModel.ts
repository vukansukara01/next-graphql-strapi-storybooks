
interface PostModel {
    id: string;
    title: string;
    body: string;
    user: string;
    __typename: string;
    image?: string;
    imageWidth?: number;
    imageHeight?: number;
}

export type { PostModel };
