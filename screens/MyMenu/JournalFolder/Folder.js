import React from 'react';
import { Text, View, StyleSheet, Image, Pressable, Alert} from 'react-native';

const Folder = (props) =>
{
    return(
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </View>  
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        height: 59,
        width: 284,
        borderRadius: 13,
        marginBottom: 15,
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    }
})

export default Folder