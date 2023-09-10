import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons, Entypo } from '@expo/vector-icons'

import { LoggedStackRoutes } from './LoggedStackRoutes'
import { Home } from '../pages/home'
import { Detail } from '../pages/detail'
import { Profile } from '../pages/profile'

const Tab = createBottomTabNavigator()

export function Routes({ token }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFF',
        tabBarStyle: {
          backgroundColor: '#1A7FDD'
        }
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={LoggedStackRoutes}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" color={color} size={size} />
            }
            return <Ionicons name="home-outline" color="#CCCCCC" size={size} />
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="person-circle" color={color} size={size} />
            }
            return (
              <Ionicons
                name="person-circle-outline"
                color="#CCCCCC"
                size={size}
              />
            )
          }
        }}
      >
        {props => <Profile {...props} token={token} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}
