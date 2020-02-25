import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '$common/components';

export const WebApp = () => {
  return (
    <View style={styles.container}>
      <Text>Web app!</Text>
      <Button text='Button text' onPress={()=>{}}/>
      <Button text='Button text Disabled' isDisabled onPress={()=>{}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
