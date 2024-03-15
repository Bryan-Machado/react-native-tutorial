import React from 'react'
import {Text, StyleSheet} from 'react-native'

const H1 = ({title = 'valor default', children = 'children default'}) => {
  return (
    <Text style={styles.h1}>{title} outro texto: {children}</Text>
  )
}

const styles = StyleSheet.create({
    h1: {
      fontSize: 20,
      fontWeight: 'bold'
    }
})

export default H1