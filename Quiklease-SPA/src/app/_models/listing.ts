import { Photo } from './photo';

export interface Listing {
    id: number;
    postedDate: Date;
    expiryDate: Date;
    address: string;
    phone: string;
    title: string;
    description: string;
    photoUrl: string;
    price: number;
    likes: number;
    rentFrom: Date;
    rentUntil: Date;
    roomsAvailable: number;
    buildingType: string;

    photos?: Photo[];

}

