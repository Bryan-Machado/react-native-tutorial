import { StyleSheet, View, Text, FlatList } from "react-native"
import H1 from "./ui/H1.js"
import CardUser from "./CardUser.js"
import { useEffect, useState } from 'react'
import Button from "./ui/Button.js"

const Body = () => {

  const [users, setUsers] = useState([])
  const [products, setProducts] = useState([])
  const [counter, setCounter] = useState(0)

  const getUsers = async () => {
    try{
      const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user')
      const data = await result.json()
      console.log(data.success)
      setUsers(data.users)
    } catch (error){
      console.log(error.message)
    }
  }

  const getProducts = async () => {
    try{
      const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/product')
      const data = await result.json()
      console.log(data.success)
      setProducts(data.products)
    } catch (error){
      console.log(error.message)
    }
  }

  const postUser = async () => {
    console.log()
    try{
      const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user', {
        method: 'POST',
        body: JSON.stringify({name: txtName, email: txtEmail, avatar: txtAvatar})
      })
      const data = await result.json()
      console.log(data.success)
      getUsers()
    } catch (error){
      console.log(error.message)
    }
  }

  useEffect(()=>{
    getUsers()
    getProducts()
  },[])

  return (
    <View style={styles.content}>
        {/* <Text>Bem Vindo!</Text>
        <H1 title='Seja Bem Vindo meu bão!'/>
        <H1 title='como foi teu dia?' />
        <H1>olha que texto html foda, exceto que nao é html</H1> */}



        <Button 
          title="Add +2"
          onPress={() => setCounter(counter + 2)}
        />
        <Button 
          title='Add +1'
          onPress={() => setCounter(counter + 1)}
        />

        <View style={styles.listUser}>
            {users.length ? 
              <FlatList
                data={users}
                renderItem={({item}) => <CardUser user={item} />}
                keyExtractor={item => item.id}
                horizontal={true}
              /> : 
              <Text style={{color: '#FFF'}}>Loading...</Text>}
        </View>

        {/* {
          products.length ? 
          <FlatList
            data={products}
            renderItem={({item}) => <CardProduct product={item} />}
            keyExtractor={item => item.id}
          />
          :
          <Text style={{color: '#FFF'}}>Loading...</Text>
        } */}

        <Text style={{color: '#FFF'}}>Valor: {counter}</Text>
        <CardUser nome="Cleitin Perulebes" email="Cleitin@Perulebes.com" avatarUrl="../assets/img/dragon.jpg"/>

    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 3,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  usuariosH1: {
    marginBottom: 20,
    color: "#FFF"
  },
  listUser:{
    height: 120
  }
})

export default Body