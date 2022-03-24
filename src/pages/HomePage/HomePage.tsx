import React from 'react';
import {Button} from 'react-native';
import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.View`
  padding: 16px;
  background: papayawhip;
`;

const HomePage = ({navigation}) => {
  return (
    <Wrapper>
      <Title>HomePage</Title>
      <Button
        title="Go to Result... again"
        onPress={() => navigation.navigate('Result')}
      />
    </Wrapper>
  );
};

export default HomePage;
