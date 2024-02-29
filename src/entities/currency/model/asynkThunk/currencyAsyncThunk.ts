import { createAsyncThunk } from '@reduxjs/toolkit';

import { AxiosError } from 'axios';
import { $api } from 'shared/api/api';

interface KnownError {
    message: string;
    description: string;
}
export const getCurrency = createAsyncThunk(
    'get_currency',
    async () => {
        try {
            const response = await $api.get("");
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            alert(error.message);
        }
    },
);