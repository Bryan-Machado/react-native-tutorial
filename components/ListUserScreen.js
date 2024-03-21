import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

//  ao invés de  <View style={{height: '100%'}}>
//  podemos usar <ScrollView contentContainerStyle={{height: '100%'}}>

export default function ListUserScreen() {
  return (
    <View style={{height: '100%'}}>
      <ImageBackground resizeMode='cover' source={require('../assets/img/dragon2.jpg')} style={styles.bg}>
        <Header />
        <Body />
        <Footer />
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'bottom',
    justifyContent: 'center',
  },
  bg: {
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  }
});
