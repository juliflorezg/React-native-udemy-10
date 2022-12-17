import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';
// import {Movie} from '../interfaces/movieInterface';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route}: Props) => {
  const movie = route.params;

  console.log(movie.original_title);

  return (
    <View>
      <Text>Detail Screen</Text>
    </View>
  );
};
