import React from 'react'
import {Text, StyleSheet} from 'react-native'

const H1 = ({children = '',style}) => {
  return (
    <Text style={[styles.h1, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    h1: {
      fontSize: 20,
      fontWeight: 'bold'
    }
})

export default H1