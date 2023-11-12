import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { FontAwesome } from '@expo/vector-icons'

export function SubjectList({ data }) {
  const navigation = useNavigation()

  function handleNavigate() {
    navigation.navigate('Detail', { data: data })
  }

  async function handleRemoveSubject() {
    try {
      await api.delete(`/materia/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container} key={data.id}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
      </View>
      <View style={styles.utils}>
        <TouchableOpacity onPress={handleNavigate}>
          <FontAwesome name="file-text-o" size={28} color="#ACACAC" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRemoveSubject}>
          <FontAwesome name="trash-o" size={28} color="#ACACAC" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 50,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    elevation: 1,
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  title: {
    color: '#ACACAC',
    fontSize: 20
  },
  utils: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
    maxWidth: '20%'
  }
})
