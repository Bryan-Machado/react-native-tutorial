import { StyleSheet, View, Text } from "react-native"

const Body = () => {
  return (
    <View style={styles.content}>
        <Text>Bem Vindo!</Text>
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