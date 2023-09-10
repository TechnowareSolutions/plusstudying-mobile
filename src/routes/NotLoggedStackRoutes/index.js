import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '../../pages/login'
import { SignUp } from '../../pages/signUp'

const Stack = createNativeStackNavigator()

export function NotLoggedStackRoutes({ onLogIn }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#1A7FDD',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false
        }}
      >
        {props => <Login {...props} onLogin={onLogIn} />}
      </Stack.Screen>
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'Cadastrar Conta',
          headerShadowVisible: false
        }}
      />
    </Stack.Navigator>
  )
}
