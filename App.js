import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
          
          <Text style={{color: '#fff'}}>Cleitin Perulebes</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image style={styles.profileImage} source={require('./assets/icon.png')} />
      </View>
      <View style={styles.footer}>
        <Text style={{color: '#fff'}}>Rodapé</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'bottom',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0000ff',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#0000ff',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
  borderBottomLeftRadius: 50,
  borderBottomRightRadius: 50
  }
});
