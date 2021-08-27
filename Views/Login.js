import React, { useContext, useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, View, TextInput, Alert } from 'react-native'
import { useHistory } from 'react-router-native'
import { LoginContext } from '../context/LoginContext';
import { PageContext } from '../context/PageContext';

export default function Login() {
  const {loginId, setLoginId, setAuth} = useContext(LoginContext)
	const history = useHistory();


  const onSubmit = () =>{

      if (loginId <= 10 ) {
        setAuth()
        history.push("/home")
      } else {
        Alert.alert("Invalid ID, please enter an ID  between 1 and 10")
      }
  }


    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Blog'R</Text>
            <TextInput onChangeText={setLoginId}  style={styles.input} placeholder="Enter your ID" keyboardType={'numeric'} 
            pattern="" 
            />
            <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: 'darkred',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  mainTitle:{
    color: 'white',
    fontSize: 64,
    marginTop: 80,
    marginBottom: 160,
    fontWeight: 'bold',
  },
  btn: {
    justifyContent: 'center',
    marginVertical: 5,
    backgroundColor: 'darkgray',
    height: 32,
    width: 150,
    borderRadius: 5,
  },
  btnText:{
    textAlign: 'center',
  },
  input: {
    marginVertical: 5,
    borderWidth:1,
    paddingLeft: 10,
    width: 150,
    borderColor: 'black',
    backgroundColor: 'whitesmoke',
  },
});