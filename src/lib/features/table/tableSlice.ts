import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SortDirection = 'asc' | 'desc' | null;
export type SortKey = 'name' | 'price' | 'change' | 'volume' | 'liquidity' | 'marketCap' | null;

interface TableState {
    sortBy: SortKey;
    sortDirection: SortDirection;
    activeTab: 'new-pairs' | 'final-stretch' | 'migrated';
    searchQuery: string;
}

const initialState: TableState = {
    sortBy: null,
    sortDirection: null,
    activeTab: 'new-pairs',
    searchQuery: '',
};

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setSort: (state, action: PayloadAction<{ key: SortKey; direction: SortDirection }>) => {
            state.sortBy = action.payload.key;
            state.sortDirection = action.payload.direction;
        },
        setActiveTab: (state, action: PayloadAction<TableState['activeTab']>) => {
            state.activeTab = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
    },
});

export const { setSort, setActiveTab, setSearchQuery } = tableSlice.actions;
export default tableSlice.reducer;
