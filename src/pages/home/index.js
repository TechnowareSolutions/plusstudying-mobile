import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight
} from 'react-native'

import { useNavigation, useIsFocused } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import api from '../../services/api'
import { SubjectList } from '../../components/subjectList'

export function Home({ token }) {
  const navigation = useNavigation()
  const isFocused = useIsFocused()

  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    async function fetchApi() {
      const response = await api.get('/subjects')
      setSubjects(response.data)
    }
    fetchApi()
  }, [])

  function handleAddSubject() {
    navigation.navigate('AddSubject')
  }

  return (
    <SafeAreaView
      contentContainerStyle={{ paddingBottom: 64 }}
      style={styles.container}
    >
      <Text style={styles.title}>Seus Estudos</Text>

      <TouchableOpacity style={styles.plusButton} onPress={handleAddSubject}>
        <Ionicons name="add-outline" size={48} color="#FFF" />
      </TouchableOpacity>

      {subjects.length === 0 && (
        <Text style={styles.noSubjectText}>
          Você ainda não tem nenhuma matéria salva
        </Text>
      )}

      <FlatList
        data={subjects}
        renderItem={({ item }) => <SubjectList data={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFDFF',
    paddingTop: StatusBar.currentHeight,
    paddingStart: 14,
    paddingEnd: 14
  },
  title: {
    color: '#1A7FDD',
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: '#ACACAC',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 32
  },
  plusButton: {
    height: 54,
    width: 54,
    position: 'absolute',
    bottom: 14,
    right: 14,
    backgroundColor: '#1A7FDD',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height
      ) / 2,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9
  },
  noSubjectText: {
    color: '#ACACAC',
    fontSize: 16
  }
})
