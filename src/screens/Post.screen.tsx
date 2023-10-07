/* Libraries */
import React from 'react';
import {ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import config from 'react-native-ultimate-config';

/* Local files */
import {PostsRouteParams} from '../navigation/stacks/types';
import {
  AuthorContainer,
  AuthorName,
  Avatar,
  Body,
  Container,
  Title,
} from '../components/styled';

const Post = (): React.JSX.Element => {
  const route = useRoute<PostsRouteParams>();
  const {post} = route.params;

  return (
    <Container>
      <Title>{post.title}</Title>

      <AuthorContainer>
        <Avatar
          source={{
            uri: `${config.API_URL_USER_AVATAR}${post.author.name}`,
          }}
        />
        <AuthorName>{post.author?.name}</AuthorName>
      </AuthorContainer>

      <ScrollView>
        <Body>{post.body}</Body>
      </ScrollView>
    </Container>
  );
};
export default Post;
