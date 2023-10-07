/* Libraries */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import config from 'react-native-ultimate-config';

/* Local Files */
import {
  AuthorContainer,
  AuthorName,
  Avatar,
  Body,
  ListItem,
  Title,
} from './styled';
import {Feed} from '../redux/ducks/types';
import {FeedScreen} from '../navigation/stacks/types';

interface Props {
  item: Feed;
}

const FeedItem = ({item}: Props): React.JSX.Element => {
  const navigation = useNavigation<FeedScreen>();

  const onFeedItemPress = (): void => {
    navigation.navigate('Post', {post: item});
  };

  const onAvatarPress = (): void => {
    navigation.navigate('Profile', {author: item.author});
  };

  const truncatedBody = `${item.body.substring(0, 100)}...`;

  return (
    <TouchableOpacity onPress={onFeedItemPress}>
      <ListItem key={item.id}>
        <AuthorContainer>
          <TouchableOpacity onPress={onAvatarPress}>
            <Avatar
              source={{uri: `${config.API_URL_USER_AVATAR}${item.author.name}`}}
            />
          </TouchableOpacity>
          <AuthorName>{item.author?.name}</AuthorName>
        </AuthorContainer>

        <Title>{item.title}</Title>
        <Body>{truncatedBody}</Body>
      </ListItem>
    </TouchableOpacity>
  );
};

export default FeedItem;
