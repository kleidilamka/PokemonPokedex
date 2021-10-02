import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const PokemonCard = ({pokeItem}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Details', {
      userId: pokeItem.id,
      name: pokeItem.name,
      imageUri: pokeItem.imageUri,
      attack: pokeItem.attack,
      defense: pokeItem.defense,
      height: pokeItem.height,
      weight: pokeItem.weight,
      type: pokeItem.type,
      description: pokeItem.description,
    });
  };
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={{uri: pokeItem.imageUri}} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text}>Name: {pokeItem.name}</Text>
        <Text style={styles.text}>Type: {pokeItem.type}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PokemonCard;
