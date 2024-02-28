import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { currencyReducer } from 'entities/currency';
import { StateSchema } from './stateSchema';

export function createRootStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        currency: currencyReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createRootStore>['dispatch']