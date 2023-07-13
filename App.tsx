/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet,Text} from 'react-native';
import QnA from './src/screens/QnA'

import "react-native-devsettings";

function App(): JSX.Element {
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <QnA/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#f5f5f8',
    paddingHorizontal: 15,
  },
});

export default App;
