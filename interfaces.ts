export enum Level {
    GOLD_USER = 'GOLD',
    SILVER_USER = 'SILVER',
    BRONZE_USER = 'BRONZE'
}

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: Level;
    date: string;
}
