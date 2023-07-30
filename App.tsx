
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

import React ,{useState} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ToastModule from './Toast';
import AlertModule from './Alert';
import BrightModule from './Bright';
import { number } from 'prop-types';

function App() {
  const [value, setValue] = useState(-1);
  const onPress3 = async () => {
    const brightness = await getBrightness();
    setValue(brightness);
  };

  const onPressLow = () => {
    setBrightness(0.25);
    BrightModule.setBrightnessLevel(0.25);
  };
  const onPressHigh = () => {
    setBrightness(1);
    BrightModule.setBrightnessLevel(1);
  };

  const onPress = () => {
    ToastModule.show('Awesome', ToastModule.SHORT);
  };
  const onPress2 = () => {
    AlertModule.alert('alert');
    console.log({
      string:AlertModule.STRING_VALUE,
      number:AlertModule.NUMBER_VALUE,
    });
  };

  return (
    <SafeAreaView style={styles.block}>
      <Button title="Update Brightness" onPress={onPress3} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{value}</Text>
      </View>
      <Button title="Low Brightness" onPress={onPressLow} />
      <Button title="High Brightness" onPress={onPressHigh} />
      <Button title="click" onPress={onPress} />
      <Button title="click2" onPress={onPress2} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 64,
  },
});

export default App;