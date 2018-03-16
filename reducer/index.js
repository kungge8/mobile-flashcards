import { 
  GET_ALL,
  NEW_DECK,
  ADD_CARD
} from '../actions';

function decks ( state = {}, action ) {
  const { decks, deckId, card } = action

  switch (action.type){
    case GET_ALL:
      return {
        ...state,
        ...decks
      };

    case NEW_DECK:
      state[deckId] = { title: deckId, questions: []};
      return {
        ...state
      };

    case ADD_CARD:
      state[deckId].questions.push(card);
      return {
        ...state
      };
  }
}

export default decks;
