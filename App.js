import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' source={require('./assets/img/dragon2.jpg')} style={styles.bg}>
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
