export const GET_ALL = 'GET_ALL';
export const GET_DECK  = 'GET_DECK';
export const NEW_DECK = 'NEW_DECK';
export const ADD_CARD = 'ADD_CARD';

export function getAllDecks ( decks ) {
  return {
    type: GET_ALL,
    decks
  };
}

export function newDeck ( deckID ) {
  return {
    type: NEW_DECK,
    deck
  };
}

export function addCard ( deckId, card ) {
  return {
    type: ADD_CARD,
    deckId,
    card
  }
}