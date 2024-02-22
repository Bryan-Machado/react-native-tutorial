import { StyleSheet, View, Text, Image } from "react-native";
import { Image as ImageExpo} from "expo-image";

const Header = () => {
  return (<View style={styles.header}>
    <View style={styles.profile}>
      <Image style={styles.profileImage} source={require('../assets/img/dragon.jpg')} />
      {/* <ImageExpo style={styles.profileImage} source={require('../assets/img/dragon.jpg')}/> */}
      {/* <Image style={styles.profileImage} source={{
            uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/92b6637c-ff4f-4237-9d77-8f8bffaa6072/d4s0k0c-482ee0cb-7252-4097-916a-1c43226d29b1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkyYjY2MzdjLWZmNGYtNDIzNy05ZDc3LThmOGJmZmFhNjA3MlwvZDRzMGswYy00ODJlZTBjYi03MjUyLTQwOTctOTE2YS0xYzQzMjI2ZDI5YjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hb0IPorOIxTYnbOe4tnEG6V870r6Q-Vtny-kRNv_DGg'
            }} /> */}
      <Text style={{ color: '#fff' }}>Cleitin Perulebes</Text>
    </View>
    <Text style={{ color: '#fff' }}>menu foda</Text>
  </View>
  )
}

const styles = StyleSheet.create({

  header: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#0000ff',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  profile: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center'
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
})

export default Header