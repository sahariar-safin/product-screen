import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomBar from './componant/BottomBer/BottomBer';
import TopBer from './componant/TopBer/TopBer';

export default function App() {
  return (
    <SafeAreaProvider>
      <TopBer></TopBer>
      <NavigationContainer style={styles.bottomNav}>
        <BottomBar></BottomBar>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchbar: {
    backgroundColor: '#fff',
  },
  bottomNav: {
    border: '3px solid black',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  }
});
