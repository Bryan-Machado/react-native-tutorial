// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import ListUserScreen from './components/ListUserScreen';
import Cadastrar from './screens/Cadastrar';
import Editar from './screens/Editar';
import Products from './screens/Products';

import { Feather } from '@expo/vector-icons';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
// const Drawer = createDrawerNavigator()


const UserNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='ListUser' component={ListUserScreen} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
      <Stack.Screen name="Editar" component={Editar} />
    </Stack.Navigator>
  )
}

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#333' },
      headerTitleStyle: { color: '#fff' }
    }}>

      <Tab.Screen name='Users' component={UserNavigator} options={{
        tabBarIcon: () => (
          <Feather name='home' size={25} color='black'/>
        )
      }}/>
      <Tab.Screen name="Products" component={Products} options={{
        tabBarIcon: () => (
          <Feather name='shopping-cart' size={25} color='black'/>
        )
      }} />

  </Tab.Navigator>
  )
}

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Editar" component={Editar} />
      </Stack.Navigator>

      {/* <Drawer.Navigator>
        <Drawer.Screen name='ListUser' component={ListUserScreen}/>
        <Drawer.Screen name="Cadastrar" component={Cadastrar}/>
      </Drawer.Navigator> */}
    </NavigationContainer>

  );
}

// ao colocarmos a tela "Meus Contatos" acima da tela home, a pagina que está mais acima abre primeiro 