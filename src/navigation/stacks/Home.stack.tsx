/* Libraries */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* Local Files */
import FeedScreen from '../../screens/Feed.screen';
import PostScreen from '../../screens/Post.screen';
import ProfileScreen from '../../screens/Profile.screen';
import {HomeStackNavigatorParamsList} from './types';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamsList>();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Feed'}>
      <Stack.Screen name={'Feed'} component={FeedScreen} />
      <Stack.Screen name={'Post'} component={PostScreen} />
      <Stack.Screen name={'Profile'} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
