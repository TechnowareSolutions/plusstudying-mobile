import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome5 } from '@expo/vector-icons'
import { Logo } from '../../components/logo'

import api from '../../services/api'

export function Login({ onLogin }) {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function handleLogin() {
    try {
      const response = await api.post('/usuario/login', {
        email,
        senha
      })
      const token = response.data.token
      await AsyncStorage.setItem('token', token)
      onLogin(token)
    } catch (error) {
      console.log(error)
    }
  }

  function handleFacebookLogin() {
    console.log('Clicou em conectar pelo Facebook')
  }

  function handleGoogleLogin() {
    console.log('Clicou em conectar pelo Google')
  }

  function handleNavigateToSignUp() {
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        locations={[0.0, 1.0]}
        colors={['#1A7FDD', '#19B7DA']}
      />

      <View style={styles.logo}>
        <Logo />
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={txt => setEmail(txt)}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={senha}
          onChangeText={txt => setSenha(txt)}
        />

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.smallText}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonTitle}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={[styles.smallText, { textAlign: 'center' }]}>
          Conecte-se com:
        </Text>

        <View style={styles.icons}>
          <TouchableOpacity onPress={handleFacebookLogin}>
            <FontAwesome5 name="facebook-f" size={24} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleGoogleLogin}>
            <FontAwesome5 name="google" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{ marginTop: 24 }}
          onPress={handleNavigateToSignUp}
        >
          <Text style={[styles.smallText, { textAlign: 'center' }]}>
            Criar conta
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingStart: 48,
    paddingEnd: 48,
    justifyContent: 'center'
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    backgroundColor: 'transparent'
  },
  logo: {
    alignSelf: 'center'
  },
  form: {
    marginBottom: 36
  },
  label: {
    color: '#FFF',
    fontWeight: '700',
    marginTop: 24,
    marginBottom: 8
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16
  },
  smallText: {
    fontSize: 14,
    color: '#FFF',
    marginTop: 4
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
    color: '#FFF'
  },
  icons: {
    width: '20%',
    marginTop: 12,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between'
  }
})
