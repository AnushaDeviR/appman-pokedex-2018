
export default (state, action) => {
    switch (action.type) {

        //stores the selected cards state upon onClick from modal to pokedex 
        case 'ADD_CARD_TO_POKEDEX':
            return {
                ...state,
                selectedCards: [action.payload, ...state.selectedCards]
            };

        //unselects the selected cards upon onClick from pokedex
        case 'REMOVE_CARD_FROM_POKEDEX':
            return {
                ...state,
                selectedCards: state.selectedCards.filter(card => card.id !== action.payload)
            }
        default:
            return state;
    }
}