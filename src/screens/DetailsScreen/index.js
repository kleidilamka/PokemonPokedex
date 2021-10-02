import React from 'react';
import {Text, Image, View} from 'react-native';

import styles from './styles';

const DetailsScreen = ({route}) => {
  const {
    name,
    imageUri,
    attack,
    defense,
    description,
    height,
    weight,
    type,
    id,
  } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: imageUri}} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titlesText}>Stats</Text>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.middleLeftContainer}>
          <Text style={styles.text}>Name: {name}</Text>
          <Text style={styles.text}>Attack: {attack}</Text>
          <Text style={styles.text}>Defense: {defense}</Text>
        </View>
        <View style={styles.middleRightContainer}>
          <Text style={styles.text}>Height: {height} cm</Text>
          <Text style={styles.text}>Weight: {weight} lbs</Text>
          <Text style={styles.text}>Type: {type}</Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titlesText}>Description</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>{description}</Text>
      </View>
    </View>
  );
};

export default DetailsScreen;
