import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';

function SignUpScreen() {

  //for text input
  const [textFirstName, onChangeTextFirstName] = React.useState(null);
  const [textLastName, onChangeTextLastName] = React.useState(null);
  const [textEmailAdd, onChangeTextEmailAdd] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.page}>
          
          <View style={styles.signUpLabelView}>
            <Text style={styles.signUpLabel}>Sign Up </Text>
            <Image source={require('../images/SignUp/signup_logo.png')}/>
          </View>
          
          <View>
            <Image source={require('../images/SignUp/signup_underline.png')}
            style={styles.signUpUnderline}
            />
          </View>

          <View style={styles.inputTypeView}>
            <SafeAreaView>
            <TextInput
                  style={styles.inputType}
                  onChangeText={onChangeTextFirstName}
                  value={textFirstName}
                  placeholder="First Name"
                  keyboardType="numeric"
            />
            <TextInput
                  style={styles.inputType}
                  onChangeText={onChangeTextLastName}
                  value={textLastName}
                  placeholder="Last Name"
                  keyboardType="numeric"
            />
            <TextInput
                  style={styles.inputType}
                  onChangeText={onChangeTextEmailAdd}
                  value={textEmailAdd}
                  placeholder="Email Address"
                  keyboardType="numeric"
            />
            <TextInput
                  style={styles.inputType}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Password"
                  keyboardType="numeric"
            />
            </SafeAreaView>
          </View>

          <View style={styles.characterMinimumView}>
            <Text style={styles.characterMinimumText}>6 characters minimum</Text>
          </View>

          <View style={styles.termsAndCondition}>
            <Text style={styles.termsAndConditionText}>By signing up you agree to our</Text>
            <Pressable onPress={() => Alert.alert("Pressed!")}>
              <Text style={styles.termsAndConditionPressable}> Terms and Condition</Text>
            </Pressable>
          </View>

          <View style={styles.signUpButtonView}>
            <Pressable style={styles.signUpButton} onPress={() => Alert.alert("Pressed!")}>
              <Text style={styles.signUpButtonText}>SIGN UP</Text>
            </Pressable>
          </View>

        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    page: {
      flex: 1,
      width: 395,
      marginTop: 4,
    },
    signUpLabelView: {
      top: 39,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    signUpLabel: {
      fontSize: 37
    },
    signUpUnderline: {
      width: 128,
      height: 12,
      borderRadius: 13,
      top: 30,
      left: 108
    },
    inputTypeView: {
      alignItems: 'center',
      top: 60,
    },
    inputType: {
      height: 59,
      width: 304,
      margin: 12,
      borderWidth: 1,
      borderRadius: 13,
      padding: 10,
    },
    characterMinimumView: {
      top: 50,
      left: 60
    },
    characterMinimumText: {
      fontWeight: 'bold'
    },
    termsAndCondition: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      top: 125
    },
    termsAndConditionText: {
      fontSize: 12
    },
    termsAndConditionPressable: {
      fontSize: 12,
      fontWeight: 'bold'
    },
    signUpButtonView: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 140
    },
    signUpButtonText: {
      color: 'white',
      fontSize: 20,
    },
    signUpButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 5,
      paddingHorizontal: 10,
      width: 304,
      height: 59,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
      borderRadius: 13
    }
  });
  export default SignUpScreen