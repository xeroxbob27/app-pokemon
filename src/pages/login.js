import React, { useState } from "react"
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native"
import { useNavigation } from "@react-navigation/native";





const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    const handleLogin = () => {
        if (email === "" && password === "") {
            navigation.navigate("main");
        } else {
            Alert.alert("Login ou senha inválidos.");
        }
    };

    const handleCadastrar = () => {
        navigation.navigate("cadastro")
    }

    return (

        <View style={style.container}>
            <TextInput
                style={style.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />


            <TextInput
                style={style.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={style.boton} onPress={handleLogin}>
                <Text style={style.botonText} >Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.boton} onPress={handleCadastrar}>
                <Text style={style.botonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#bdeabb61"
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#046d16",
        marginVertical: 10,
        width: "80%",
        padding: 10
    },
    boton: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#046d16",
        backgroundColor: "#8ed69a",
        marginVertical: 10,
        width: "15%",
        padding: 9,
    },
    botonText: {
        color: "#2a6739",
        fontWeight: "bold",
        textAlign: "center",
        alignItems: "center",
    }
})

export default Login;