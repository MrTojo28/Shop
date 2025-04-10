export type TProduct = {
    id: number;
    name: string;
    description: string;
    images: string[];
    price: number;
    category: ECategories;
}

export type TCategory = {
    text: string;
    id: number;
}

export enum ECategories {
    ALL,
    EXTRACTS,
    SMART_WATER,
    NAPITKI,
    TEA,
    COSMECTIK
}
