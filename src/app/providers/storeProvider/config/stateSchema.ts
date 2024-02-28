import { CurrencySchema } from 'entities/Currency';

export interface StateSchema {
    currency: CurrencySchema;
}

export type StateSchemaKey = keyof StateSchema;