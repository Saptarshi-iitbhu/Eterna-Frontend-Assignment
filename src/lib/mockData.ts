import { Token } from '@/types/token';

const tokenNames = [
    'Apple', 'decembear', 'Qf Quantum future', 'SBTS Shark Bitton Tech Stack', 'SBW $AM THE BEER WIZARD',
    'foss ai', 'chimp', '$MYRO Myro', 'MTYMAX Multi-Tx Max',
    'Lawrence Jail Lawrence Reed', 'NVIDIA', 'MOLINA Jail Teresa Molina', 'Bitcoin', 'Ethereum', 'Solana'
];

const symbols = [
    'AAPL', 'BEAR', 'QF', 'SBTS', 'SBW', 'FOSS', 'CHIMP', 'MYRO', 'MTY', 'LAW', 'NVDA', 'MOL', 'BTC', 'ETH', 'SOL'
];

const generateRandomToken = (index: number, category: 'new-pairs' | 'final-stretch' | 'migrated'): Token => {
    const nameIndex = index % tokenNames.length;
    const name = tokenNames[nameIndex];
    const symbol = symbols[nameIndex];

    return {
        id: `token-${category}-${index}`,
        name,
        symbol,
        logoUrl: `https://api.dicebear.com/7.x/identicon/svg?seed=${category}-${index}`,
        price: Math.random() * 100,
        priceChange: (Math.random() * 200) - 100,
        change24h: (Math.random() * 200) - 100,
        marketCap: category === 'new-pairs' ? Math.random() * 5000000 : Math.random() * 100000000,
        volume24h: Math.random() * 50000,
        liquidity: Math.random() * 100000,
        holders: Math.floor(Math.random() * 100),
        replies: Math.floor(Math.random() * 10),
        likes: Math.floor(Math.random() * 20),
        views: Math.floor(Math.random() * 100),
        createdAt: new Date(Date.now() - Math.random() * 3600000).toISOString(), // Within last hour
        category,
        chain: 'SOL',
        isNew: category === 'new-pairs',
        isVerified: Math.random() > 0.5,
        bondingValue: category !== 'migrated' ? (Math.random() * 200 - 100) : undefined,
        virtualCurve: category === 'migrated' ? `${(Math.random() * 100).toFixed(1)}%` : undefined,
    };
};

export const MOCK_TOKENS: Token[] = [
    ...Array.from({ length: 20 }, (_, i) => generateRandomToken(i, 'new-pairs')),
    ...Array.from({ length: 20 }, (_, i) => generateRandomToken(i, 'final-stretch')),
    ...Array.from({ length: 20 }, (_, i) => generateRandomToken(i, 'migrated')),
];
