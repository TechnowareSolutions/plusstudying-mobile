import React, { useState } from 'react'
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

import { Ionicons } from '@expo/vector-icons'

import api from '../../services/api'

export function SignUp({ navigation }) {
  const [nome, setNome] = useState('')
  const [cpf, setCPF] = useState('')
  const [email, setEmail] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [senha, setSenha] = useState('')

  function getDate() {
    const date = new Date()

    const year = date.toLocaleString('default', { year: 'numeric' })
    const month = date.toLocaleString('default', { month: '2-digit' })
    const day = date.toLocaleString('default', { day: '2-digit' })

    const formattedDate = `${year}-${month}-${day}`

    return formattedDate
  }

  async function handleSignUp() {
    try {
      await api.post('/usuario', {
        plano: {
          id: 1
        },
        nome: nome,
        dataNascimento: nascimento,
        cpf: cpf,
        email: email,
        senha: senha,
        dataCriacaoLogin: getDate(),
        statusConta: 's',
        dataUltimoLogin: getDate()
      })
      navigation.goBack()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.formContainer}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={txt => setNome(txt)}
        />

        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          keyboardType={'email-address'}
          value={email}
          onChangeText={txt => setEmail(txt)}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={senha}
          onChangeText={txt => setSenha(txt)}
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

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonTitle}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 38 : StatusBar.currentHeight,
    backgroundColor: '#FFFFFF',
    paddingStart: 12,
    paddingEnd: 12
  },
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 24
  },
  formContainer: {
    paddingStart: 24,
    paddingEnd: 24
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
