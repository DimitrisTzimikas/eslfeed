/* Libraries */
import axios, {AxiosResponse} from 'axios';
import {Dispatch} from 'redux';
import config from 'react-native-ultimate-config';

/* Local files */
import {Feed, FeedAction, FeedState, User} from './types';

/*  Types */
const FETCH_FEED_REQUEST = 'FETCH_FEED_REQUEST';
const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS';
const FETCH_FEED_FAILURE = 'FETCH_FEED_FAILURE';

const initialState: FeedState = {
  feed: [],
  loading: false,
  error: null,
};

/*  Reducers */
const feedReducer = (state = initialState, action: FeedAction): FeedState => {
  switch (action.type) {
    case FETCH_FEED_REQUEST:
      return {...state, loading: true, error: null};
    case FETCH_FEED_SUCCESS:
      return {...state, loading: false, feed: action.payload};
    case FETCH_FEED_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

/*  Actions */
const fetchFeedRequest = () => ({
  type: FETCH_FEED_REQUEST as typeof FETCH_FEED_REQUEST,
});

const fetchFeedSuccess = (feed: Feed[]) => ({
  type: FETCH_FEED_SUCCESS as typeof FETCH_FEED_SUCCESS,
  payload: feed,
});

const fetchFeedFailure = (error: string) => ({
  type: FETCH_FEED_FAILURE as typeof FETCH_FEED_FAILURE,
  payload: error,
});

/*  Async Actions */
const fetchFeed = (numberOfPosts: number = 10) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(fetchFeedRequest());
      const [postsResponse, usersResponse]: [
        AxiosResponse<Feed[]>,
        AxiosResponse<User[]>,
      ] = await Promise.all([
        axios.get(config.API_URL_POSTS),
        axios.get(config.API_URL_USERS),
      ]);

      const posts = postsResponse.data.slice(0, numberOfPosts);
      const users = usersResponse.data.reduce(
        (acc: Record<number, any>, user: User) => {
          acc[user.id] = user;
          return acc;
        },
        {},
      );
      const feedWithAuthors = posts.map((post: Feed) => ({
        ...post,
        author: users[post.userId],
      }));

      dispatch(fetchFeedSuccess(feedWithAuthors));
    } catch (error: any) {
      dispatch(fetchFeedFailure(error.message));
    }
  };
};

export {
  feedReducer,
  fetchFeedRequest,
  fetchFeedSuccess,
  fetchFeedFailure,
  fetchFeed,
};
