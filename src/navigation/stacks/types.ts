/* Libraries */
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// ParamList
type HomeStackNavigatorParamsList = {
  Feed: undefined;
  Profile: undefined;
  Post: undefined;
};

type FeedScreenParamsList = Omit<HomeStackNavigatorParamsList, 'Feed'>;

// NavigationProps
type FeedScreen = NativeStackNavigationProp<FeedScreenParamsList>;

export type {HomeStackNavigatorParamsList, FeedScreen};
