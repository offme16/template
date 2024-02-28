import axios from 'axios';
import  axiosRetry from 'axios-retry';

const baseUrl = 'https://64ad3ed7b470006a5ec59979.mockapi.io/api/v1/collection';

export const $api = axios.create({
    baseURL: baseUrl,
});

axiosRetry($api, {
    retries: 1,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: (error) => error.response!.status > 400,
});