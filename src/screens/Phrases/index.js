import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const PhrasesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Common Phrases</Text>
    </View>
  );
};
 
export default PhrasesScreen;