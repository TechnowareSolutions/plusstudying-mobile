import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGO</Text>
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
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: '#FFF'
  }
})
