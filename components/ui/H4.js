import React from 'react'
import {Text, StyleSheet} from 'react-native'

const H4 = ({children}) => {
  return (
    <Text>{children}</Text>
  )
}

const styles = StyleSheet.create({
    h4: {
      fontSize: 20,
      fontWeight: 'bold'
    }
})

export default H4