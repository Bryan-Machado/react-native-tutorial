import { View, Text, StyleSheet, Button, ScrollView, TextInput } from "react-native"
import { useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"

const Cadastrar = () => {

    const [txtName, setTxtName] = useState('')
    const [txtEmail, setTxtEmail] = useState('')
    const [txtAvatar, setTxtAvatar] = useState('')
    const navigation = useNavigation()
    const route = useRoute()
    const {users, setUsers} = route.params

    const postUser = async () =>{
        try{
          const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user', {
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({name: txtName, email: txtEmail, avatar: txtAvatar})
          })
          const data = await result.json()
          console.log(data)
          setUsers([data.user, ...users])
          navigation.goBack()
        } catch (error){
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
        <Button 
          title="Cadastrar Usuário"
          onPress={() => {navigation.navigate('Cadastrar', )}}
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