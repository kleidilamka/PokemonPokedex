/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPokemon = /* GraphQL */ `
  query GetPokemon($id: ID!) {
    getPokemon(id: $id) {
      attack
      defense
      description
      height
      id
      name
      imageUri
      type
      weight
      createdAt
      updatedAt
    }
  }
`;
export const listPokemons = /* GraphQL */ `
  query ListPokemons(
    $filter: ModelPokemonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPokemons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        attack
        defense
        description
        height
        id
        name
        imageUri
        type
        weight
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
