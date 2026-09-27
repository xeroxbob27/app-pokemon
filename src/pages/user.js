import React, { Component } from "react";
import { formatTypes } from "../services/pokeapi";
import {
  Container,
  header as Header,
  AvatarUser,
  NameUser,
  BioUser,
  Start,
  Starred,
  Info,
  Title,
  Author,
} from "../styles";

export default class User extends Component {
  render() {
    const { route } = this.props;
    const { pokemon } = route.params;

    return (
      <Container>
        <Header>
          <AvatarUser source={{ uri: pokemon.avatar }} />
          <NameUser>{pokemon.name}</NameUser>
          <BioUser>{formatTypes(pokemon.types)}</BioUser>
        </Header>
        <Start
          data={pokemon.stats}
          keyExtractor={(stat) => stat.name}
          renderItem={({ item }) => (
            <Starred>
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.value}</Author>
              </Info>
            </Starred>
          )}
        />
      </Container>
    );
  }
}