/* Local files */
import {
  fetchFeedFailure,
  fetchFeedRequest,
  fetchFeedSuccess,
} from './feed.duck';

type FeedAction =
  | ReturnType<typeof fetchFeedRequest>
  | ReturnType<typeof fetchFeedSuccess>
  | ReturnType<typeof fetchFeedFailure>;

type Feed = {
  author: User;
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface FeedState {
  feed: Feed[];
  loading: boolean;
  error: string | null;
}

export type {Feed, FeedState, FeedAction, User};
