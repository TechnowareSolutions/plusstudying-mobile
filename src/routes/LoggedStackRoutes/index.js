import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../../pages/home'
import { Detail } from '../../pages/detail'
import { AddSubject } from '../../pages/addSubject'

const Stack = createNativeStackNavigator()

export function LoggedStackRoutes({ token }) {
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
        name="Home"
        options={{
          headerShown: false
        }}
      >
        {props => <Home {...props} token={token} />}
      </Stack.Screen>
      <Stack.Screen
        name="Detail"
        options={{
          title: 'Detalhes da matéria',
          headerShadowVisible: false
        }}
      >
        {props => <Detail {...props} token={token} />}
      </Stack.Screen>
      <Stack.Screen
        name="AddSubject"
        options={{
          title: 'Qual assunto quer aprender?',
          headerShadowVisible: false
        }}
      >
        {props => <AddSubject {...props} token={token} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
