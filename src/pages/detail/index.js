import React, { useLayoutEffect, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native'
import { useRoute, useNavigation, useIsFocused } from '@react-navigation/native'

import { Ionicons } from '@expo/vector-icons'

import { Module } from '../../components/module'

export function Detail() {
  const route = useRoute()
  const navigation = useNavigation()
  const isFocused = useIsFocused()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data
        ? route.params?.data.name
        : 'Detalhes da matéria'
    })
  }, [navigation, route.params?.data])

  useEffect(() => {
    navigation.getParent().setOptions({
      tabBarStyle: { display: 'none', backgroundColor: 'transparent' }
    })
  }, [isFocused])

  function handleHelpAsked() {
    console.log('Clicou em Help')
  }

  return (
    <View
      contentContainerStyle={{ paddingBottom: 48 }}
      style={styles.container}
    >
      <TouchableOpacity style={styles.helpButton} onPress={handleHelpAsked}>
        <Ionicons name="help-outline" size={32} color="#1A7FDD" />
      </TouchableOpacity>

      <FlatList
        data={route.params?.data.modules}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => <Module data={item} index={index} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 32,
    paddingStart: 14,
    paddingEnd: 14
  },
  helpButton: {
    height: 36,
    width: 36,
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#1A7FDD',
    bottom: 14,
    right: 14,
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height
      ) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9
  }
})
