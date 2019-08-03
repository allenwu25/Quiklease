import { Listing } from './listing';

export interface User {
    id: number;
    userName: string;
    fullName: string;

    listings?: Listing[];
}
