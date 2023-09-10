import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Feather } from '@expo/vector-icons'

export function Topic({ data }) {
  const [checked, setChecked] = useState(false)

  return (
    <View style={styles.container}>
      {checked ? (
        <Feather name="check-square" size={24} color="#121212" />
      ) : (
        <Feather name="square" size={24} color="#121212" />
      )}

      <Text style={styles.name}>{data.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingStart: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14
  },
  name: {
    marginLeft: 14
  }
})
