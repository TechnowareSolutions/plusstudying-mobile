import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Profile } from '../../pages/profile'
import { EditUser } from '../../pages/editUser'

const Stack = createNativeStackNavigator()

export function ProfileStackRoutes({ token }) {
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
        name="Profile"
        options={{
          headerShown: false
        }}
      >
        {props => <Profile {...props} token={token} />}
      </Stack.Screen>
      <Stack.Screen
        name="EditUser"
        options={{
          title: 'Editar Conta',
          headerShadowVisible: false
        }}
      >
        {props => <EditUser {...props} token={token} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
