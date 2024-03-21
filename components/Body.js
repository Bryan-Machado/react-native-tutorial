import { StyleSheet, View, Text, FlatList, ScrollView } from "react-native"
import H1 from "./ui/H1.js"
import CardUser from "./CardUser.js"
import { useEffect, useState } from 'react'
import Button from "./ui/Button.js"
import { useNavigation } from "@react-navigation/native"

// meu banco https://backend-api-express-study.onrender.com/user
// banco do prof https://backend-api-express-1sem2024-rbd1.onrender.com/user

const Body = () => {

  const [users, setUsers] = useState([])
  const navigation = useNavigation()

  const getUsers = async () => {
    try{
      const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user?34')
      const data = await result.json()
      console.log(data.success)
      setUsers(data.users)
    } catch (error){
      console.log('Error getUsers ' + error.message)
    }
  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <View style={styles.content}>       

        <View style={styles.titleAdd}>
          <H1 style={styles.usuariosH1}>Users</H1>
          <Button title="Add User" onPress={() => navigation.navigate('Cadastrar', {users, setUsers})} />
        </View>

        <H1>Usuários</H1>
        <ScrollView>
            {users.length ? 
              <FlatList
                data={users}
                renderItem={({item}) => <CardUser user={item} />}
                keyExtractor={item => item.id}
                horizontal={true}
              /> : 
              <Text style={{color: '#FFF'}}>Loading...</Text>}
        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  // content: {
  //   flex: 3,
  //   // backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // usuariosH1: {
  //   marginBottom: 20,
  //   color: "#FFF"
  // },
  // listUser:{
  //   display: 'flex',
  //   width: '100%',
  //   alignItems: 'center',
  //   marginBottom: 20
  // },
  // titleAdd:{
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   paddingHorizontal: 20,
  // }

  usuariosH1: {
    marginBottom: 20,
    color: "#FFF",
  },
  listUser:{
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20
  },
  titleAdd:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  }
})

export default Body