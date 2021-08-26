import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native'
import Homepage from './Views/Homepage';
import Login from './Views/Login';
import { PageContext } from './context/PageContext';
import { LoginContext } from './context/LoginContext';


export default function App() {
    const [isLogged, setIsLogged] = useState(false)
    const [pageSelected,setPageSelected] = useState("Home")

    const setAuth = () =>{ setIsLogged(!isLogged)  }


    console.log('is logged in login -> ', isLogged)
    return (
      <View style={styles.container}>
          <NativeRouter style={styles.Route} >
          <LoginContext.Provider value={{isLogged, setAuth}}>
                <PageContext.Provider value={{pageSelected,setPageSelected}}>
                      {isLogged ? 
                        <Route  path="/home" component={Homepage} /> :
                        <Route  exact path="/" component={Login} /> 
                      }
                </PageContext.Provider>
              </LoginContext.Provider>
          </NativeRouter>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainTitle:{
    fontSize: 40,
    fontWeight: 'bold',
  },
  Route:{
    flex: .7,
  },
});
