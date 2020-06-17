export const setFavourite = payload => ({
    type: 'SET_FAVOURITES',
    payload: payload
});

export const unSetFavourite = payload => ({
    type: 'UNSET_FAVOURITES',
    payload: payload
});

export const loginRequest = payload => ({
    type: 'SET_NEW_USER',
    payload: payload
});

export const logoutRequest =payload => ({
    type: 'LOGOUT_REQUEST',
    payload
});

export const registerRequest = payload => ({
    type: 'REGISTER_REQUEST',
    payload: payload
})

    