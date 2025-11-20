export interface Token {
    id: string;
    name: string;
    symbol: string;
    logoUrl: string;
    price: number;
    priceChange: number;
    marketCap: number;
    volume24h: number;
    holders: number;
    replies: number;
    likes: number;
    views: number;
    createdAt: string;
    category: 'new-pairs' | 'final-stretch' | 'migrated';
    chain: 'SOL' | 'ETH' | 'BASE';
    isVerified?: boolean;
    bondingValue?: number;
    virtualCurve?: string;
}
