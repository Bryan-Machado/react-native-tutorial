import { View, Text, StyleSheet, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"

const Editar = () => {

    const navigation = useNavigation()

    return (
        
    <View style={styles.container}>
        <Text>Editar</Text>
    </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Editar