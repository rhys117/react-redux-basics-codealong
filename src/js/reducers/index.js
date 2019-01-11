import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

const initialState = {
  articles: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;