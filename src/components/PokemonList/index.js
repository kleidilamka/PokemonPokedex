/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {View, FlatList, TextInput, ActivityIndicator} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';
import {listPokemons} from '../../../graphql/queries';
import PokemonCard from '../PokemonCard';
import filter from 'lodash.filter';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchPokemons();
  }, []);
  const fetchPokemons = async () => {
    try {
      const pokeData = await API.graphql(graphqlOperation(listPokemons));
      setPokemons(pokeData.data.listPokemons.items);
      setFullData(pokeData.data.listPokemons.items);
      setIsLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  if (isLoading) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 200,
        }}>
        <ActivityIndicator size="large" color="#DD5E56" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 18}}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }

  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, (filteredPokemon) => {
      return contains(filteredPokemon, formattedQuery);
    });
    setPokemons(filteredData);
    setQuery(text);
  };

  const contains = ({name, type}, query) => {
    if (
      name.toLowerCase().includes(query.toLowerCase()) ||
      type.toLowerCase().includes(query.toLowerCase())
    ) {
      return true;
    }

    return false;
  };

  return (
    <View>
      <View
        style={{
          backgroundColor: '#fff',
          width: '90%',
          padding: 13,
          marginTop: 10,
          borderRadius: 20,
          alignSelf: 'center',
        }}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={(queryText) => handleSearch(queryText)}
          placeholder="Search"
          style={{backgroundColor: '#fff', marginLeft: 10}}
        />
      </View>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <PokemonCard pokeItem={item} />}
      />
    </View>
  );
};

export default PokemonList;
