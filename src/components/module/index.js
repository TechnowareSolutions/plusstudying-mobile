import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native'

import { Entypo } from '@expo/vector-icons'

import { Topic } from '../topic'

export function Module({ data, index }) {
  const [showTopics, setShowTopics] = useState(false)

  function handleShowTopics() {
    setShowTopics(!showTopics)
  }

  return (
    <View>
      <Pressable style={styles.moduleArea} onPress={handleShowTopics}>
        <Text style={styles.title}>
          Módulo {index + 1} - {data.name}
        </Text>
        {showTopics ? (
          <Entypo name="chevron-up" size={28} color="#121212" />
        ) : (
          <Entypo name="chevron-down" size={28} color="#121212" />
        )}
      </Pressable>

      {showTopics ? (
        <View>
          {data.topics.map(item => (
            <Topic key={item.id} data={item} />
          ))}
        </View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  moduleArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomColor: '#ACACAC',
    borderBottomWidth: 0.5,
    padding: 8
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24
  }
})
