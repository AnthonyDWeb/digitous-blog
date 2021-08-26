import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Links from './Links'

export default function Navbar() {
    

    return (
        <View style={styles.container}>
            <Links to="/home">Home</Links>
            <Links to="/post">Post</Links>
            <Links to="/profile">Profile</Links>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'darkgray',
    },
  });