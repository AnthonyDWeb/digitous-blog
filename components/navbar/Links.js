import { log } from 'async';
import React, { useContext } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
// import { useHistory } from 'react-router-native'
import { PageContext } from '../../context/PageContext';


export default function Links({ children}) {
	const {pageSelected, setPageSelected} = useContext(PageContext)
	const {lastPage, setLastPage} = useContext(PageContext)
	const {page, setPage} = useContext(PageContext)


	const handlePress = () => {
		setPage(prev => [...prev,pageSelected])
		setLastPage(pageSelected);
		setPageSelected(children)
	};
	
	
	
	return (
		<TouchableOpacity onPress={handlePress} style={styles.btn}>
			<Text style={styles.btnText}>{children}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
    btn: {

    },
    btnText:{

    },
  });