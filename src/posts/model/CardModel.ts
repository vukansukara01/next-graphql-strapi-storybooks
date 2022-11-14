
interface CardModel {
    user: string;
    id: number;
    title: string;
    body: string;
    handleOpenPost(id: number): void;
}

export type { CardModel };
