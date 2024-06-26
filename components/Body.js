import { StyleSheet, View, Text, FlatList } from "react-native"
import { useEffect } from 'react'
import H1 from "./ui/H1.js"
import CardUser from "./CardUser.js"
import Button from "./ui/Button"
import { useNavigation } from "@react-navigation/native"
// import Header from "./Header.js"
// import Footer from "./Footer.js"
import useUserStore from "../stores/userStore.js"

// meu banco https://backend-api-express-study.onrender.com/user
// banco do prof https://backend-api-express-1sem2024-rbd1.onrender.com/user

const Body = () => {

  const users = useUserStore(state => state.users)
  const setUsers = useUserStore(state => state.setUsers)
  const navigation = useNavigation()

  const getUsers = async () => {
    try{
      const result = await fetch('https://backend-api-express-study.onrender.com/user')
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
    <View style={{maxHeight: '100%'}}>       

        <View style={styles.titleAdd}>
          <H1 style={styles.usuariosH1}>Users</H1>
          <Button title="Add User" onPress={() => navigation.navigate('Cadastrar', {users, setUsers})} />
        </View>

        <H1 style={styles.usuariosH1}>Usuários</H1>
        <View style={styles.listUser}>
            {users.length ? 
              <FlatList
                data={users}
                renderItem={({item}) => <CardUser user={item} />}
                keyExtractor={item => item.id}
                scrollEnabled={true}
                // ListHeaderComponent={<Header usuarioLogado={user} />}
                // ListFooterComponent={Footer}
              /> : 
              <Text style={{color: '#FFF'}}>Loading...</Text>}
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  usuariosH1: {
    marginBottom: 20,
    color: "#FFF",
    textAlign: 'center'
  },
  listUser:{
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    maxHeight: 300
  },
  contentContainer:{
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