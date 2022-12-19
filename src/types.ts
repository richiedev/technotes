export type User = {
    username: string;
    password: string;
    roles: string[];
    active: boolean;
    id: string;
};

export type Note = {
    user: string;
    title: string;
    text: string;
    completed: boolean;
    id: string;
    createdAt: string;
    updatedAt: string;
    ticket: number;
}