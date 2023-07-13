import { StyleSheet, Text, View } from 'react-native'
import React,{ useEffect, useState }  from 'react'
import InputBox from '../components/InputBox'
import QnAList from '../components/QnAList'
import Tab from '../components/Tab'


const DATA=[
  {id:'전체'},
  {id:'서비스',qu:'코멘토는 어떤 서비스인가요??',an:'서비스 ....'},
  {id:'어플',qu:'코멘토는 어플은 어떻게 다운 받나요??',an:'어플 ....'},
  {id:'이용방법',qu:'코멘토는 이용방법은 어떻게 되나요??',an:'이용방법 ....'},
  {id:'고객센터',qu:'코멘토는 고객센터는 어디인가요??',an:'고객센터 ....'}
];


const QnA = () => {
  const [searchTxt,setSearchTxt]=useState('');
  const [dataList,setDataList]=useState(DATA.filter((item,idx)=>idx>0));
  console.log(dataList)
  const search = (text) =>{
    setSearchTxt(text)
  }
  
  console.dir(dataList)
  useEffect(()=>{
    if(searchTxt==='전체' || searchTxt===''){
      setDataList(DATA.filter((item,idx)=>idx>0));
    } else{
      setDataList(DATA.filter(item => item.id==searchTxt));
    }
  },[searchTxt]);
  return (
    <View>
      <Tab data={DATA} searchFucntion={search}/>
      <InputBox searchFucntion={search}/>
      <QnAList data={dataList}/>
    </View>

  )
}

export default QnA

const styles = StyleSheet.create({})