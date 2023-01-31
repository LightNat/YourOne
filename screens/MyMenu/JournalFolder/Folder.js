import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Pressable} from 'react-native';

const Folder = (props) =>
{
  // const [checked, setChecked] = useState(false);
  
  
    return(
      // <View style={styles.page}>
      //   <Pressable
      //   onPress={() => setChecked(!checked)}
      //   style={{ alignItems: 'center' }}
      //   >
      // <View style={styles.container}>
      //   {checked ? (
      //     <View style={styles.checkbox}>
      //       {/* <Text style={styles.checkmark}>✓</Text> */}
      //       <Image source={require('../../../images/Tabs/Menu/MyJournal/check.png')}
      //       style={styles.chechImage}
      //       />
      //     </View>
      //   ) : (
      //     <View style={styles.checkbox} />
      //   )}
      //   {/* {
      //     checked ? (Alert.alert('clicked')): (Alert.alert('not clicked'))
      //   } */}
        
      //   <Text style={styles.label}>{checked? console.log(props.key) :<Text>{props.index}</Text> }</Text>
      // </View>
      // </Pressable>
        
      // </View>

      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </View>
      
      
      // <View style={styles.page}>
      //   <CheckBox
      //     value={isSelected}
      //     onValueChange={setSelection}
      //     style={styles.checkbox}
      //   />
      //   <View style={styles.button}>
      //     <Text style={styles.buttonText}>{props.text}</Text>
      //   </View>
      //   <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>  
      // </View>
      
    );
}

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
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
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'pink',
      marginBottom: 10,
      marginRight: 10
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
})

export default Folder