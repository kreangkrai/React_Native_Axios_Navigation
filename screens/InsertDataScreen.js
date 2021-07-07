import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
const InsertDataScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={{color:'black'}}>Home Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("Details")}
      />
      </View>
    );
};

export default InsertDataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});