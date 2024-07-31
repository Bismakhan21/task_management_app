import { StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'

const Statusbar = () => {
  return (
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
  )
}

export default Statusbar

const styles = StyleSheet.create({

})