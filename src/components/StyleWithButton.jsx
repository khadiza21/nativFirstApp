import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

const StyleWithButton = () => {
  return (
    <View>
      <Text>StyleWithButton</Text>
      <Button title="Press Me" color={'purple'} />
      {/* Touchable opacity where can be apply the style                              */}
      <TouchableOpacity style={styles.button} activeOpacity={0.1}>
        {/* by default active opacity 0.2  */}
        <Text style={styles.buttonText}>Touchable Opacity</Text>
      </TouchableOpacity>
      {/* touchable highlight er must onpress use krte hbe  */}
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          console.log('Hello');
        }}
        underlayColor="#3a1078">
        <Text style={styles.buttonText}>TouchableHighlight </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 20,
    backgroundColor: '#4e31aa',
    padding: 20,
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default StyleWithButton;
