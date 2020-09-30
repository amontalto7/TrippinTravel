import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const handleTrip = () => {
  // TODO implement real sign up mechanism

  setTripCity(true);
};


 
const TripsScreen = ({ navigation  }) => {
  return (
    <View style={styles.container}>
      <Text>Protected Trips Screen</Text>
      <Button title="New York" onPress={() => navigation.navigate('TripTabs')} />
    </View>
  );
};
 
export default TripsScreen;