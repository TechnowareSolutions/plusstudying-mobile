import { useState, useEffect } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Platform,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import api from '../../services/api'

export function EditUser({ token }) {
  const isFocused = useIsFocused()

  const [nome, setNome] = useState('')
  const [cpf, setCPF] = useState('')
  const [email, setEmail] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [senha, setSenha] = useState('')

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await api.get('/usuario', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setNome(response.data.nome)
        setCPF(response.data.cpf)
        setEmail(response.data.email)
        setNascimento(response.data.dataNascimento)
      } catch (error) {
        console.log(error)
      }
    }
    fetchApi()
  }, [isFocused])

  async function handleUpdateData() {
    try {
      await api.put(
        '/usuario',
        {
          nome: nome,
          dataNascimento: nascimento,
          cpf: cpf,
          email: email
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 64 }}
      style={styles.container}
    >
      <Text style={styles.label}>Nome: {nome}</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={txt => setNome(txt)}
      />

      <Text style={styles.label}>E-mail: {email}</Text>
      <TextInput
        style={styles.input}
        keyboardType={'email-address'}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />

      <Text style={styles.label}>CPF:</Text>
      <TextInput
        style={styles.input}
        keyboardType={'numeric'}
        value={cpf}
        onChangeText={txt => setCPF(txt)}
      />

      <Text style={styles.label}>Data de Nascimento:</Text>
      <TextInput
        style={styles.input}
        value={nascimento}
        onChangeText={txt => setNascimento(txt)}
      />

      <TouchableOpacity style={styles.button} onPress={handleUpdateData}>
        <Text style={styles.buttonTitle}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
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
