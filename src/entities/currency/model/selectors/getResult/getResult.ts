import { StateSchema } from 'app/providers/storeProvider/config/stateSchema';

export const getResult = (state: StateSchema) => state?.currency?.result;