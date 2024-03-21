// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListUserScreen from './components/ListUserScreen';
import Cadastrar from './screens/Cadastrar';
import Editar from './screens/Editar';

const Stack = createNativeStackNavigator()

export default function App() {
  return (

    <NavigationContainer>
      {/* <StatusBar style="auto" /> */}

      <Stack.Navigator>
        <Stack.Screen name='ListUser' component={ListUserScreen}/>
        <Stack.Screen name="Cadastrar" component={Cadastrar}/>
        <Stack.Screen name="Editar" component={Editar}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

// ao colocarmos a tela "Meus Contatos" acima da tela home, a pagina que está mais acima abre primeiro 