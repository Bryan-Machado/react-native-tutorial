import { ScrollView, StyleSheet, TextInput } from "react-native"
import Button from "../components/ui/Button.js"

import { useRoute, useNavigation } from "@react-navigation/native"
import { useState } from "react"
import useUserStore from "../stores/userStore.js"


const Editar = () => {

    const route = useRoute()
    const navigation = useNavigation()

    const { user } = route.params
    console.log(user);

    const [txtName, setTxtName] = useState(user.name)
    const [txtEmail, setTxtEmail] = useState(user.email)
    const [txtAvatar, setTxtAvatar] = useState(user.avatar)

    const updateUser = useUserStore()
    const removeUserStore = useUserStore(state => state.removeUser)

    const editUser = async () => {
        try {
            // link do professor
            // https://backend-api-express-1sem2024-rbd1.onrender.com/user
            const result = await fetch('https://backend-api-express-study.onrender.com/user', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: txtName, email: txtEmail, avatar: txtAvatar })
            })
            const data = await result.json()
            if (data?.success) {
                navigation.goBack()
            } else {
                alert(data.error)
            }

        } catch (error) {
            console.log('Error putUser ' + error.message)
        }
    }

    const removeUser = async () => {
        try {
            // link do professor
            // https://backend-api-express-1sem2024-rbd1.onrender.com/user
            const result = await fetch('https://backend-api-express-study.onrender.com/user/' + user.id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await result.json()
            console.log(data)
            if (data?.success) {
                removeUserStore(user.id)
                navigation.goBack()
            } else {
                alert(data.error)
            }
        } catch (error) {
            console.log('Error removeUser ' + error.message)
            alert(error.message)
        }
    }

    return (

        <ScrollView>
            <TextInput
                style={styles.input}
                placeholder="Nome..."
                onChangeText={setTxtName}
                value={txtName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email..."
                onChangeText={setTxtEmail}
                value={txtEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Avatar..."
                onChangeText={setTxtAvatar}
                value={txtAvatar}
            />
            <Button
                title="Editar Usuário"
                onPress={editUser}
            />
            <Button
                title="Remover Usuário"
                onPress={removeUser}
            />
        </ScrollView>
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

export default Editar