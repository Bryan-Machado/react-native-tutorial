import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListUserScreen from "../components/ListUserScreen";
import Cadastrar from "../screens/Cadastrar";
import Editar from "../screens/Editar";

const Stack = createNativeStackNavigator()

const UserNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='ListUser' component={ListUserScreen}/>
        <Stack.Screen name="Cadastrar" component={Cadastrar}/>
        <Stack.Screen name="Editar" component={Editar}/>
      </Stack.Navigator>
    )
}

export default UserNavigator