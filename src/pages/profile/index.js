import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import { useNavigation, useIsFocused } from '@react-navigation/native'

import api from '../../services/api'
import { useState, useEffect } from 'react'

export function Profile({ token }) {
  const isFocused = useIsFocused()
  const navigation = useNavigation()

  const [id, setId] = useState('')
  const [nome, setNome] = useState('')
  const [cpf, setCPF] = useState('')
  const [email, setEmail] = useState('')
  const [nascimento, setNascimento] = useState('')

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await api.get('/usuario', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setId(response.data.id)
        setNome(response.data.nome)
        setCPF(response.data.cpf)
        setEmail(response.data.email)
        setNascimento(response.data.dataNascimento)
        setSenha(response.data.senha)
      } catch (error) {
        console.log(error)
      }
    }
    fetchApi()
  }, [isFocused])

  function handleNavigate() {
    navigation.navigate('EditUser')
  }

  async function handleDeleteUser() {
    try {
      await api.delete(`/usuario/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView
      contentContainerStyle={{ paddingBottom: 64 }}
      style={styles.container}
    >
      <Text style={styles.title}>Perfil</Text>

      <Text style={styles.label}>Nome: {nome}</Text>

      <Text style={styles.label}>E-mail: {email}</Text>

      <Text style={styles.label}>CPF: {cpf}</Text>

      <Text style={styles.label}>Data de Nascimento: {nascimento}</Text>

      <TouchableOpacity style={styles.button} onPress={handleNavigate}>
        <Text style={styles.buttonTitle}>Editar Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonRed]}
        onPress={handleDeleteUser}
      >
        <Text style={styles.buttonTitle}>Excluir Conta</Text>
      </TouchableOpacity>
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
  label: {
    fontSize: 16,
    marginBottom: 8
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
  buttonRed: {
    backgroundColor: '#dc2626'
  },
  buttonTitle: {
    fontSize: 16,
    color: '#F3F9FF',
    textAlign: 'center'
  }
})
