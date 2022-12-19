import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

  return (
    <View style={styles.container}>
      <Image
        source={{uri}}
        style={{width: 100, height: 100, borderRadius: 10}}
      />
      <View style={styles.actorInfo}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
          {actor.name}
        </Text>
        <Text style={{fontSize: 16, color: '#222'}}>{actor.character}</Text>
      </View>
      <Text>{}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 10,
    borderRadius: 10,
  },
  actorInfo: {
    marginLeft: 10,
  },
});