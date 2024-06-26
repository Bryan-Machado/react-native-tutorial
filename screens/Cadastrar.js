import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native"
import { useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import Button from "../components/ui/Button"
import useUserStore from "../stores/userStore"

const Cadastrar = () => {

  const [txtName, setTxtName] = useState('')
  const [txtEmail, setTxtEmail] = useState('')
  const [txtAvatar, setTxtAvatar] = useState('')
  const [txtPass, setTxtPass] = useState('')
  

  const addUser = useUserStore(state => state.setUsers)

  const postUser = async () => {
    try {
      // link do professor
      // https://backend-api-express-1sem2024-rbd1.onrender.com/user
      const result = await fetch('https://backend-api-express-study.onrender.com/user/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: txtName, email: txtEmail, avatar: txtAvatar })
      })
      const data = await result.json()
      if (data?.success) {
        addUser(data.user)
        navigation.goBack()
      } else {
        alert(data.error)
      }

    } catch (error) {
      console.log('Error postUser ' + error.message)
    }
  }

  return (

    <ScrollView>
      <TextInput
        style={styles.input}
        placeholder="Nome..."
        onChangeText={setTxtName}
        value={txtName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email..."
        onChangeText={setTxtEmail}
        value={txtEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Avatar..."
        onChangeText={setTxtAvatar}
        value={txtAvatar}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha..."
        onChangeText={setTxtAvatar}
        value={txtAvatar}
      />
      <Button
        title="Cadastrar Usuário"
        onPress={postUser}
      />
    </ScrollView>
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