const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVOURITES':
            return { ...state, myList: [...state.myList, action.payload]}
        
        case 'UNSET_FAVOURITES':
            return{...state, myList: state.myList.filter( item => item.id !== action.payload)}
    
        default:
            return state;
    }
}

export default reducer;