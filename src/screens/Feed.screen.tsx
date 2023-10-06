/* Libraries */
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

/* Local files */
import {FeedScreen} from '../navigation/stacks/types';

const Feed = (): React.JSX.Element => {
  const navigation = useNavigation<FeedScreen>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <Text>test</Text>
      <Button
        title={'Go to Post'}
        onPress={() => {
          navigation.navigate('Post');
        }}
      />
    </View>
  );
};

export default Feed;
