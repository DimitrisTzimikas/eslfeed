/* Libraries */
import React from 'react';
import {ScrollView, Text} from 'react-native';
import config from 'react-native-ultimate-config';
import {useRoute} from '@react-navigation/native';

/* Local files */
import {Avatar, Container} from '../components/styled';
const Profile = (): React.JSX.Element => {
  const route = useRoute<ProfileRouteParams>();
  const {author} = route.params;

  return (
    <Container>
      <Avatar source={{uri: `${config.API_URL_USER_AVATAR}${author.name}`}} />
      <ScrollView>
        <Text>Name: {author.name}</Text>
        <Text>Email: {author.email}</Text>
        <Text>Phone: {author.phone}</Text>
        <Text>Website: {author.website}</Text>
        <Text>City: {author.address.city}</Text>
        <Text>Street: {author.address.street}</Text>
        <Text>Suite: {author.address.suite}</Text>
        <Text>Zipcode: {author.address.zipcode}</Text>
        <Text>Geo lat: {author.address.geo.lat}</Text>
        <Text>Geo lng: {author.address.geo.lng}</Text>
        <Text>Company name: {author.company.name}</Text>
        <Text>Company bs: {author.company.bs}</Text>
        <Text>Company catchPhrase: {author.company.catchPhrase}</Text>
      </ScrollView>
    </Container>
  );
};

import {ProfileRouteParams} from '../navigation/stacks/types';

export default Profile;
