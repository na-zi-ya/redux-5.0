import { createAction } from '@reduxjs/toolkit';

export const fetchSaltSuggestions = createAction('salt/fetchSaltSuggestions');
export const setLoading = createAction('salt/setLoading');
export const setSaltSuggestions = createAction('salt/setSaltSuggestions');
export const pharmacyId = createAction('salt/pharmacyId');
export const formAction = createAction('salt/fromAction');
export const strengthAction = createAction('salt/strengthAction');
export const packingAction = createAction('salt/packingAction');
export const lowestPriceAction = createAction('salt/lowestPriceAction');
export const resetSelectedForm = createAction('salt/resetSelectedForm');
export const setError = createAction('salt/setError');
