import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'
import { NotLoggedStackRoutes } from './src/routes/NotLoggedStackRoutes'

export default function App() {
  const [token, setToken] = useState('a')

  function onLogIn(token) {
    setToken(token)
  }

  return (
    <NavigationContainer>
      {token.length > 0 ? (
        <Routes token={token} />
      ) : (
        <NotLoggedStackRoutes onLogIn={onLogIn} />
      )}
    </NavigationContainer>
  )
}
