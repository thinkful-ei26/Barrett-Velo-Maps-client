import { API_BASE_URL } from '../config';

export const SAVE_NEW_ROUTE_INPUT = 'SAVE_NEW_ROUTE_INPUT';
export const saveNewRouteInput = (input) => ({
    type: SAVE_NEW_ROUTE_INPUT,
    input
})

export const SAVE_NEW_ROUTE_PATH = 'SAVE_NEW_ROUTE_PATH';
export const saveNewRoutePath = (path) => ({
    type: SAVE_NEW_ROUTE_PATH,
    path
})