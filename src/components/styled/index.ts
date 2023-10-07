/* Libraries */
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

const ListItem = styled.View`
  margin-bottom: 36px;
  background-color: snow;
  padding: 16px;
  border-radius: 18px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Body = styled.Text`
  font-size: 16px;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 8px;
`;

const AuthorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 16px;
`;

const AuthorName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export {Body, Container, ListItem, Title, Avatar, AuthorContainer, AuthorName};
