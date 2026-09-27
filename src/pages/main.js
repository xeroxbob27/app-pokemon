import React, { Component } from "react"
import Icon from '@expo/vector-icons/MaterialIcons'
import { getPokemonDetail, formatTypes } from '../services/pokeapi'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Container, Form, Imput, SubmitButton, List, User, Avatar, Name, Bio, ProfileButton, ProfileButtonText } from "../styles"
import { Keyboard, ActivityIndicator } from "react-native";

export default class Main extends Component {
    state = {
        newPokemon: "",
        pokemons: [],
        loading: false,
    }

    async componentDidMount() {
        const pokemons = await AsyncStorage.getItem("pokemons");

        if (pokemons) {
            this.setState({ pokemons: JSON.parse(pokemons) });
        }
    }

    componentDidUpdate(_, prevState) {
        const { pokemons } = this.state;

        if (prevState.pokemons !== pokemons) {
            AsyncStorage.setItem("pokemons", JSON.stringify(pokemons));
        }
    }


    handleAddPokemon = async () => {
        try {
            const { pokemons, newPokemon } = this.state
            this.setState({ loading: true })
            const data = await getPokemonDetail(newPokemon);

            if (pokemons.some((p) => p.login === data.login)) {
                alert("Esse pokemon já está na lista");
                this.setState({ loading: false });
                return;
            }

            this.setState({
                pokemons: [...pokemons, data],
                newPokemon: "",
                loading: false
            })
            Keyboard.dismiss()
        }
        catch (error) {
            alert("Pokemon não encontrado");
            this.setState({ loading: false });
        }
    }


    render() {
        const { pokemons, newPokemon, loading } = this.state

        return (
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Container>
                    <Form >
                        <Imput
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Adicionar pokemon"
                            value={newPokemon}
                            onChangeText={(text) => this.setState({ newPokemon: text })}
                            returnKeyType="send"
                            onSubmitEditing={this.handleAddPokemon}
                        />
                        <SubmitButton loading={loading} onPress={this.handleAddPokemon}>
                            {loading ? (<ActivityIndicator />) : (<Icon name="add" size={15} color="#f8f9f6" />)}
                        </SubmitButton>
                    </Form>
                    <List
                        data={pokemons}
                        keyExtractor={pokemon => pokemon.login}
                        renderItem={({ item }) => (
                            <User>
                                <Avatar source={{ uri: item.avatar }} />
                                <Name>{item.name}</Name>
                                <Bio>{formatTypes(item.types)}</Bio>
                                <ProfileButton onPress={() => this.props.navigation.navigate("user", { pokemon: item })} style={{ padding: 10, color: '#f8f9f6' }}>
                                    <ProfileButtonText>
                                        Ver pokemon
                                    </ProfileButtonText>
                                </ProfileButton>
                                <ProfileButton onPress={() => {
                                    this.setState({
                                        pokemons: this.state.pokemons.filter(
                                            (pokemon) => pokemon.login !== item.login,
                                        ),
                                    })
                                }}>
                                    <ProfileButtonText style={{ padding: 10, color: '#f8f9f6' }}>
                                    Excluir
                                </ProfileButtonText>
                            </ProfileButton>
                            </User>
                        )}
                    />
            </Container>
            </GestureHandlerRootView >
        )

    }
}