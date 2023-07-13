import { StyleSheet, Text, FlatList, View, Pressable } from 'react-native'
import React, { useState } from 'react'

const QnAList = ({ data }) => {

  type listData = {
    id: string;
    q: string;
    a: string;
  };
  type dataProps = {
    item: listData;
    onPress: () => void;
  };
  const Item = ({ item, onPress, tab, txt, show }) => (
    <View style={styles.line}>
      <Pressable onPress={onPress} style={[styles.tabList,tab]}>
        <Text style={[ { color: txt },styles.tit]}>{item.qu}</Text>
      </Pressable>
      <View style={[{ display: show },styles.answer]}>
          <Text style={styles.anTxt}>{item.an}</Text>
        </View>
    </View>

  );
  const [selectedId, setSelectedId] = useState<string>();
  const renderItem = ({ item }: { item: listData }) => {
    const tab = item.id === selectedId ? styles.on : null;
    const txt = item.id === selectedId ? '#fff' : '#333';
    const show = item.id === selectedId ? 'block' : 'none';


    return (
      <Item
        item={item}
        onPress={() => { setSelectedId(item.id); }}
        tab={tab}
        txt={txt}
        show={show}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  )
}

export default QnAList

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    borderTopWidth:1,
    borderColor:'#d2d2d2'
  },
  tabList: {
    paddingVertical:10,
    paddingHorizontal:10
  },
  on: {
    backgroundColor: '#75add0',
  },
  line:{
    borderBottomWidth:1,
    borderBlockColor:'#d2d2d2'
  },
  answer:{
    backgroundColor:'#e5e5e5',
    paddingVertical:20,
    paddingHorizontal:15
  },
  tit:{
    fontSize:16
  },
  anTxt:{
    color:'#777'
  }

})