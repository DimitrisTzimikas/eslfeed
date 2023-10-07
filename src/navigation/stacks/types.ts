/* Libraries */
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

/* Local files */
import {Feed, User} from '../../redux/ducks/types';

// ParamList
type HomeStackNavigatorParamsList = {
  Feed: undefined;
  Profile: {
    author: User;
  };
  Post: {
    post: Feed;
  };
};

type FeedScreenParamsList = Omit<HomeStackNavigatorParamsList, 'Feed'>;

// NavigationProps
type FeedScreen = NativeStackNavigationProp<FeedScreenParamsList>;

// RouteProps
type PostsRouteParams = RouteProp<HomeStackNavigatorParamsList, 'Post'>;
type ProfileRouteParams = RouteProp<HomeStackNavigatorParamsList, 'Profile'>;

export type {
  HomeStackNavigatorParamsList,
  FeedScreen,
  PostsRouteParams,
  ProfileRouteParams,
};
