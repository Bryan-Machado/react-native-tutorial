import { Text, View, StyleSheet, TextInput } from "react-native"
import Button from "../components/ui/Button"
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useEffect, useState } from "react"

const Products = () => {

    const [nameUser, setNameUser] = useState('')

    const saveAs = async (data, value) => {
        await AsyncStorage.setItem(data, value)
    }
    const getAs = async (data) => {
        let dataFound = null
        try {
            dataFound = await AsyncStorage.getItem(data)
            return dataFound
        } catch (error) {
         console.log(error);   
        }
    }

    useEffect(() => {
        const getNome = async () => {
            const nome = await getAs('nome')
            setNameUser(nome)
        }
        setNameUser()
    }, [])

    return (
        <View style={styles.container}>
            <Text>nome salvo: {nameUser}</Text>
            <TextInput 
                placeholder="Nome"
                onChangeText={setNameUser}
                value={nameUser}
            />
            <Text>exemplo AsyncStorage</Text>
            <Button title="Cadastrar Nome User" 
            onPress={() => saveAs('nome', 'Cleitin Perulebes')}/>
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

export default Products