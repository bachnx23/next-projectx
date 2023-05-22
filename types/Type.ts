export interface Post {
    url: string;
    slug: string;
    title: string;
    image: string;
    author: Author;
    content: string;
    description: string;
    create_time?: string;
    categories: Category[];
}

export interface Category {
    title: string;
    slug: string;
    url: string;
}

export interface Author {
    name: string;
    slug: string;
}