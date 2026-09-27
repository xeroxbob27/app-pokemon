import React from "react"
import Routes from "./src/routes"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#c5d2cc"/>
      <Routes />
    </NavigationContainer>
  )
}