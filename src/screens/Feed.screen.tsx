/* Libraries */
import React, {useEffect, useState} from 'react';
import {Text, FlatList, RefreshControl, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

/* Local files */
import {fetchFeed} from '../redux/ducks/feed.duck';
import {RootState} from '../redux/store';
import FeedItem from '../components/Feed.item';
import {Container} from '../components/styled';

const Feed = (): React.JSX.Element => {
  const dispatch = useDispatch<any>();
  const {feed, loading, error} = useSelector((state: RootState) => state.feed);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(10);

  useEffect((): void => {
    dispatch(fetchFeed());
  }, [dispatch]);

  const onRefresh = (): void => {
    setRefreshing(true);
    setPage(10);
    dispatch(fetchFeed()).finally(() => setRefreshing(false));
  };

  const onEndReached = (): void => {
    dispatch(fetchFeed(page + 10));
    setPage(page + 10);
  };

  if (loading && !refreshing) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Text>Error: {error}</Text>
      </Container>
    );
  }

  return (
    <Container>
      <FlatList
        data={feed}
        renderItem={({item}) => <FeedItem item={item} />}
        keyExtractor={item => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
      />
    </Container>
  );
};

export default Feed;
