export const setFavourite = payload => ({
    type: 'SET_FAVOURITES',
    payload: payload
});

export const unSetFavourite = payload => ({
    type: 'UNSET_FAVOURITES',
    payload: payload
});