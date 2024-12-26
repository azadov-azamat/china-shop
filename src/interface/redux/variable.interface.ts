import {mediaDataProps} from "./media.interface.ts";
import {UserDataProps} from "./auth.interface.ts";

export interface InitialStateProps {
    loading: boolean;
    subscribeLoading: boolean;
    product: productCardProps | null;
    products: productCardProps[] | [];
    carts: cartCardProps[] | [];

    currentPage: number;
    pageCount: number;
    limit: number;
    totalCount: number;
}

export interface cartCardProps extends productCardProps{
    quantity: number;
}

export interface likeDataProps extends defaultKeys{
    liked: boolean;
    owner?: UserDataProps | null;
    product: productCardProps | null;
}

export interface productCardProps extends defaultKeys{
    name: string;
    price: number;
    sizes: string[];
    description: string;
    media: mediaDataProps[] | [];
    like: likeDataProps | null;
    amount: number;
}

export interface defaultKeys {
    id?: number;
    // created_at: string; // Assuming the timestamp is stored in ISO format
    // updated_at: string; // Assuming the timestamp is stored in ISO format
}