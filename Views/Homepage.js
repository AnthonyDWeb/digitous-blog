import React, { useContext } from 'react'
import Navbar from '../components/navbar/Navbar'
import { View, Text, StyleSheet } from 'react-native'
import { PageContext } from '../context/PageContext'

export default function Homepage() {
    const {pageSelected} = useContext(PageContext);
    
    
    return (
        <View style={styles.container}>
          {pageSelected === "Home" && <Text>Homepage</Text>}
          {pageSelected === "Post" && <Text>Post</Text>}
          {pageSelected === "Profile" && <Text>Profile</Text>}
          <Navbar/>
        </View>
    )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent:'space-between',
  },
navbar:{
  flex: .3,
},
});