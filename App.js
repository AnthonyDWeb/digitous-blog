import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native'
import Homepage from './Views/Homepage';
import Login from './Views/Login';
import { PageContext } from './context/PageContext';
import { LoginContext } from './context/LoginContext';


export default function App() {
    const [isLogged, setIsLogged] = useState(false)
    const [loginId, setLoginId] = useState(null)
    const [pageSelected,setPageSelected] = useState("My post")
    const [page, setPage] = useState([])
    const [lastPage, setLastPage] = useState("")


    const setAuth = () =>{ setIsLogged(!isLogged)  }
    
  console.log('login', isLogged)
    return (
      <View style={styles.container}>
          <NativeRouter style={styles.Route} >
          <LoginContext.Provider value={{isLogged,loginId, setLoginId, setAuth}}>
                <PageContext.Provider value={{pageSelected,setPageSelected, lastPage, setLastPage, page, setPage}}>
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
