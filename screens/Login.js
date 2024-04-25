import { View, StyleSheet, TextInput } from "react-native"
import { useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import Button from "../components/ui/Button"
import useUserStore from "../stores/userStore"
import H1 from "../components/ui/H1"

const Cadastrar = () => {

  const navigation = useNavigation()

  const [txtEmail, setTxtEmail] = useState('')
  const [txtPass, setTxtPass] = useState('')

  return (

    <View>
      <H1>Entrar</H1>
      <TextInput
        style={styles.input}
        placeholder="Email..."
        onChangeText={setTxtEmail}
        value={txtEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha..."
        onChangeText={setTxtPass}
        value={txtPass}
        secureTextEntry={true}
      />
      <Button 
        title='Login'
        onPress={()=>{}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    display: 'flex',
    padding: 40
  },

  input: {
    height: 40,
    width: 300,
    backgroundColor: '#FFF',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})

export default Cadastrar