import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native'
import { RadioButton } from 'react-native-paper'

export function AddSubject({ token }) {
  const [subject, setSubject] = useState('')
  const [availability, setAvailability] = useState('')
  const [howLongToLearn, setHowLongToLearn] = useState('')
  const [checkedInitialLevel, setCheckedInitialLevel] = React.useState('first')
  const [checkedWishedLevel, setCheckedWishedLevel] = React.useState('first')

  function handleCreateSubject() {
    console.log('Clicou em conectar pelo Facebook')
  }

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 64 }}
      style={styles.container}
    >
      <Text style={styles.label}>Digite o assunto:</Text>
      <TextInput
        style={styles.input}
        value={subject}
        onChangeText={txt => setSubject(txt)}
      />

      <Text style={styles.label}>
        Qual sua disponibilidade de tempo para aprender?
      </Text>
      <TextInput
        style={styles.input}
        value={availability}
        onChangeText={txt => setAvailability(txt)}
      />

      <Text style={styles.label}>Em quanto tempo quer aprender?</Text>
      <TextInput
        style={styles.input}
        value={howLongToLearn}
        onChangeText={txt => setHowLongToLearn(txt)}
      />

      <Text style={styles.label}>Qual o seu nível sobre o assunto?</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setCheckedInitialLevel('first')}
        >
          <RadioButton
            value="basic"
            color="#000"
            status={checkedInitialLevel === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedInitialLevel('first')}
          />
          <Text style={styles.radioLabel}>Básico</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setCheckedInitialLevel('second')}
        >
          <RadioButton
            value="intermediary"
            color="#000"
            status={checkedInitialLevel === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedInitialLevel('second')}
          />
          <Text style={styles.radioLabel}>Intermediário</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setCheckedInitialLevel('third')}
        >
          <RadioButton
            value="advanced"
            color="#000"
            status={checkedInitialLevel === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedInitialLevel('third')}
          />
          <Text style={styles.radioLabel}>Avançado</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Qual nível quer atingir?</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setCheckedWishedLevel('first')}
        >
          <RadioButton
            value="basic"
            color="#000"
            status={checkedWishedLevel === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedWishedLevel('first')}
          />
          <Text style={styles.radioLabel}>Básico</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setCheckedWishedLevel('second')}
        >
          <RadioButton
            value="intermediary"
            color="#000"
            status={checkedWishedLevel === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedWishedLevel('second')}
          />
          <Text style={styles.radioLabel}>Intermediário</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setCheckedWishedLevel('third')}
        >
          <RadioButton
            value="advanced"
            color="#000"
            status={checkedWishedLevel === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedWishedLevel('third')}
          />
          <Text style={styles.radioLabel}>Avançado</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCreateSubject}>
        <Text style={styles.buttonTitle}>Criar Estudo</Text>
      </TouchableOpacity>
    </ScrollView>
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
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    marginBottom: 34,
    borderWidth: 1,
    borderColor: 'gray'
  },
  radioGroup: {
    marginBottom: 26
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  radioLabel: {
    marginLeft: 10
  },
  button: {
    backgroundColor: '#1A7FDD',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 56,
    paddingLeft: 56,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 24
  },
  buttonTitle: {
    fontSize: 16,
    color: '#F3F9FF',
    textAlign: 'center'
  }
})
