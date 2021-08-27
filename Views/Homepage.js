import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { PageContext } from '../context/PageContext'
import { LoginContext } from '../context/LoginContext'

export default function Homepage() {
  const {pageSelected, setPageSelected} = useContext(PageContext);
  const {page, setPage} = useContext(PageContext);
  const {lastPage} = useContext(PageContext);
  const {loginId, setLoginId} = useContext(LoginContext)

  const [user, setUser] = useState([])
  const [post, setPost] = useState([])
  const [comment, setComment] = useState([])
  

    useEffect(()=>{
      
      const getUserInformation = async() => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${loginId}`);
        const data = await res.json()
        setUser(data)
      }
      getUserInformation()
      
      const getAllPost = async() => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${loginId}/posts`);
        const data = await res.json()
        setPost(data)
      }
      getAllPost()
      
      // setPage([pageSelected])
      // const getCommentsPost = async() => {
      //   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${loginId}/posts/${post.id}/comments`);
      //   const data = await res.json()
      //   setPost(data)
      // }
      // getCommentsPost()
    },[])


    const lastPageSelected = async() => { 
      console.log(`lastpageselected /${lastPage}`)
      setPageSelected(page[page.length -1])
      await setPage(prev => {
        prev.pop()
        return page
      })
      // history.push(`/${lastPage}`)
    }
    // const lastPageSelected = () => { setPageSelected(lastPage)}

    const renderHomepage = ({item}) => {

      return <>
        <View style={styles.flatlist}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>user id: {item.userId}</Text>
            <Text style={styles.txt}>id: {item.id}</Text>
            <View style={styles.subContainer}>
                <Text style={styles.txt}><Text style={styles.username}>{user.name} : </Text> {item.body}</Text>
            </View>
        </View>
      </>
    }

    const renderPost = ({item}) => {
      return <>
        <View style={styles.flatlist}> 
        </View>
      </>
    }

    const renderProfile = ({item}) => {
      return <>
        <View style={styles.flatlist}>
        </View> 
      </>
    }
    
    console.log('page',page);
    console.log('last page',page[page.length -1]);


    return (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <TouchableOpacity onPress={lastPageSelected}>
                <Text>Back</Text>
            </TouchableOpacity>
          <Text style={styles.mainTitle}>{pageSelected}</Text> 
          </View>
          {pageSelected === "My post" && <FlatList data={post} renderItem={renderHomepage} keyExtractor={(_item, index) => index}/>}
          {pageSelected === "Post" && <FlatList data={post} renderItem={renderPost} keyExtractor={(_item, index) => index}/>}
          {pageSelected === "Profile" && <FlatList data={post} renderItem={renderProfile} keyExtractor={(_item, index) => index}/>}

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
  mainTitle:{
    fontSize: 40,
    fontWeight: 'bold',
  },
  flatlist:{
    marginVertical: 10,
    marginHorizontal: 25,
  },
  subContainer:{
    flexDirection: 'row',
  },
  title:{
    marginVertical: 10,
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
  },
  txt:{
    marginVertical: 1,
  },
  username:{
    fontWeight: '700',
  },
});