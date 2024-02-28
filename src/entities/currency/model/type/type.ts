interface DataItem {
    date: string;
    value: number;
    month: string;
    indicator: string;
}

export interface CurrencySchema {
    result?: DataItem[];
    isLoading: boolean;
    error?: string;
}