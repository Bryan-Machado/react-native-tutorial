import { StyleSheet, View, Text } from "react-native"
import H1 from "./ui/H1.js"
import CardUser from "./CardUser.js"

const Body = () => {
  return (
    <View style={styles.content}>
        <Text>Bem Vindo!</Text>
        <H1 title='Seja Bem Vindo meu bão!'/>
        <H1 title='como foi teu dia?' />
        <H1>olha que texto html foda, exceto que nao é html</H1>
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
  }
})

export default Body