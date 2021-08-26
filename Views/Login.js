import React, { useContext } from 'react'
import { TouchableOpacity, Text, StyleSheet, View, TextInput, Alert } from 'react-native'
import { useHistory } from 'react-router-native'
import { LoginContext } from '../context/LoginContext';
import { PageContext } from '../context/PageContext';

export default function Login() {
  const {isLogged,setAuth} = useContext(LoginContext)
	const history = useHistory();


  const onSubmit = () =>{
    setAuth()
    history.push("/home")
}
  
    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Login</Text>
            <TextInput style={styles.input} />
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
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  mainTitle:{
    fontSize: 64,
    marginTop: 40,
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
    width: 150,
    borderColor: 'black',
    backgroundColor: 'whitesmoke',
  },
});