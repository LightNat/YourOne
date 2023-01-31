import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image} from 'react-native';

const FolderContent = () => 
{
    return(
      <View>
        <Text>sample</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    marginTop: 100
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    fontSize: 14,
    textAlign: 'center'
  },
  chechImage: {
    width: 12,
    height: 12
  },
  label: {
    marginLeft: 10,
  },
});

export default FolderContent