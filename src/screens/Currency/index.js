import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const CurrencyScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Currency Conversions</Text>
    </View>
  );
};
 
export default CurrencyScreen;