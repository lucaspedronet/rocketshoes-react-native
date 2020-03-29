import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationRef } from './services/navigation/RootNavigation'

import Home from './pages/Home'
import Cart from './pages/Cart'

import HeaderLogo from './components/HeaderLogo'
import HeaderRight from './components/HeaderRight'

const Stack = createStackNavigator()

export default function Routes()  {
  return(
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#141419",
          },
          headerLeft: props => <HeaderLogo {...props} />,
          headerRight: props  => <HeaderRight {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: null }} />
        <Stack.Screen name="Cart" component={Cart} options={{ title: null }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

