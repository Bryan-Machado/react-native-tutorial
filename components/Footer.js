import { StyleSheet, View, Text } from "react-native";
import { Image as ImageExpo} from 'expo-image';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={{ color: '#fff' }}>Copyright 2024</Text>
            <ImageExpo style={[styles.copyright, { marginTop: 10 }]} source='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' />
        </View>
    )
}

const styles = StyleSheet.create({
    
  copyright: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  
  footer: {
    flex: 1,
    // backgroundColor: '#0000ff',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Footer