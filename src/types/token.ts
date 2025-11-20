export interface Token {
    id: string;
    name: string;
    symbol: string;
    logoUrl: string;
    price: number;
    priceChange: number;
    change24h: number;
    marketCap: number;
    volume24h: number;
    liquidity: number;
    holders: number;
    replies: number;
    likes: number;
    views: number;
    createdAt: string;
    category: 'new-pairs' | 'final-stretch' | 'migrated';
    chain: 'SOL' | 'ETH' | 'BASE';
    isNew?: boolean;
    isVerified?: boolean;
    bondingValue?: number;
    virtualCurve?: string;
}
