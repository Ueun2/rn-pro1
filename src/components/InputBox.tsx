import { StyleSheet, TextInput,KeyboardAvoidingView, Platform} from 'react-native'
import React,{useState} from 'react'

const InputBox = ({searchFucntion}) => {
  const [text, setText] = useState('');
 
  return (
    <TextInput
    style={styles.inputBox}
    onChangeText={(e)=> {setText(e); searchFucntion(e)}}
    value={text}
    placeholder="검색어를 입력하세요"
  />
  )
}

export default InputBox

const styles = StyleSheet.create({
  inputBox:{
    borderRadius:5,
    backgroundColor:'#fff',
    height:48,
    paddingHorizontal:10,
    borderWidth:1,
    borderColor:'#d2d2d2'
  }
})