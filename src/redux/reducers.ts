/* Libraries */
import {combineReducers} from 'redux';

/* Local Files */
import {feedReducer} from './ducks/feed.duck';

/* Reducers */
const reducers = combineReducers({
  feed: feedReducer,
});

export {reducers};
