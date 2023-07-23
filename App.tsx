
// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Auth from './Auth';

// function MainScreen(props) {

//   if(props == id)
//   {
//     console.log("id")
//   }

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text> MainScreen</Text>
//     </View>
//   );
// }

// function SettingScreen(props) {


//   if(props == id)
//   {
//     console.log("id")
//   }

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text> SettingScreen</Text>
//     </View>
//   );
// }

// function LoginScreen(props) {


//   if(props == id)
//   {
//     console.log("id")
//   }

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>LoginScreen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Main" component={Auth(MainScreen, null)} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// import Profile from "./src/screens/Profile";

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Profile userName={"samslow"} name={"Comento"} />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ToastModule from ‘./Toast.js’;

function App() {
  const onPress = () => {
    ToastModule.show = (“hello”, ToastModule.SHORT);
  };
  return (
    <SafeAreaView >
      <Button
        onPress={onPress}
        title='버튼'
      ></Button>
    </SafeAreaView >
  );
}
export default App;
