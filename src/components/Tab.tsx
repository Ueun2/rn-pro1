import { StyleSheet, Text, FlatList, View, Pressable } from 'react-native'
import React, { useState } from 'react'

const Tab = ({ data ,searchFucntion}) => {
  type listData = {
    id: string;
    q: string;
    a: string;
  };
  type dataProps = {
    item: listData;
    onPress: () => void;
  };
  const Item = ({ item, onPress, tab,txt}) => (
    <Pressable onPress={onPress} style={[styles.tabList,  tab ]}>
      <Text style={{color:txt}}>{item.id}</Text>
    </Pressable>
  );
  const [selectedId, setSelectedId] = useState<string>('전체');
  const renderItem = ({ item }: { item: listData }) => {
    const tab = item.id === selectedId ? styles.on : null;
    const txt = item.id === selectedId ? '#fff': '#666';
  

    return (
      <Item
        item={item}
        onPress={() => {setSelectedId(item.id);searchFucntion(item.id)}}
        tab={tab}
        txt={txt}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        horizontal={true}
      />
    </View>
  )
}

export default Tab

const styles = StyleSheet.create({
  container:{
    marginVertical:20,
    justifyContent:'center'
  },
  tabList:{
    paddingHorizontal:10,
    paddingVertical:5,
    marginHorizontal:5,
    borderRadius:5,
    fontSize:18,
    backgroundColor:'#ddd',
  },
  on:{
    backgroundColor:'#75add0',
  },

 
})