import { View, StyleSheet, Text } from "react-native"
import Button from "../components/ui/Button.js"
import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"


const Splash = () => {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {

        }, 8001)
    }, [])

    return (

        <View>
            <Text>
                carregando...
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        display: 'flex',
        padding: 40
    },

    input: {
        height: 40,
        width: 300,
        backgroundColor: '#FFF',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})

export default Splash