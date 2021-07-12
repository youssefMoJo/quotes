import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Share } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Title from "./Components/Title"
import Card from "./Components/Cards"
import ShareComp from "./Components/Share"

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();



export default function App() {
  const [data, setData] = useState()
  const cardData = (e) => {
    setTimeout(() => {
      setData(e)

    }, 0);
  }
  return (
    <LinearGradient
      colors={['#145686', 'white', '#0D5680']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >

      <View style={styles.container}>
        <Title />
        <Card cardDetails={(e) => cardData(e)} />
        <ShareComp data={data} />
      </View>

    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
