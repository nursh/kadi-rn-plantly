import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Index() {

  return (
    <View style={styles.container}>
      <Text>Our new app is up and running</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})