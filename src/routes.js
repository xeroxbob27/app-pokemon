import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./pages/login"
import Main from "./pages/main"
import User from "./pages/user"

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: "LOGIN",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "#0ad576"
                    },
                    headerTitleStyle: {
                        fontWeight: "bold",
                        color: "#109726"
                    }

                }}
            />
            <Stack.Screen
                name="main"
                component={Main}
                options={{
                    title: "Github Viewr",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "#0ad576"
                    },
                    headerTitleStyle: {
                        fontWeight: "bold",
                        color: "#fff"
                    }
                }}
            />
            <Stack.Screen
                name="user"
                component={User}
                options={{
                    title: "Perfil",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "#0ad576"
                    },
                    headerTitleStyle: {
                        fontWeight: "bold",
                        color: "#fff"
                    }
                }}
            />
        </Stack.Navigator>
    )

}