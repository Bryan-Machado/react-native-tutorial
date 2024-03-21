import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import H4 from './ui/H4.js'
import { Image } from 'expo-image'
import {Image as ImageReact} from 'react-native'

const CardUser = ({user}) => {
  return (
    <View style={styles.card}>
        <View style={styles.avatar}>
            <Image style={styles.avatarImg} 
            source={user?.avatar}/>
            {/* <ImageReact style={styles.avatarImg} src={user?.avatar}/> */}
        </View>
        <View>
            <H4>{user?.name}</H4>
            <Text style={styles.email}>{user?.email}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        height: 100,
        backgroundColor: '#FFF',
        borderRadius: 25                
    },
    avatar: {
        paddingHorizontal: 10
    },
    avatarImg: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    email: {
        paddingTop: 5
    }
    
})

export default CardUser