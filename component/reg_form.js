import React from "react";
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, SafeAreaView} from "react-native"

export default function RegForm (){

    const [userName, setUserName] = React.useState("");
    const [userLastName, setUserLastName] = React.useState("");
    const [userEmail, setUserEmail] = React.useState("");

    const buttonSendClicked = () => {
        alert(`Thank you, ${userName} for entering your name`);
        setUserName("");
    }

    const buttonClearClicked = () => {
        setUserName("");
        setUserLastName("");
        setUserEmail("");
    }

    return (
        <View style={styles.regForm}>
            <Text style={styles.header}>Registration</Text>
            <View>
            <View style={styles.labelContainer}>
                <Text style={{color: '#36454F'}}>First Name</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput value={userName} onChangeText={value => setUserName(value)}/>
            </View>
            </View>
            <View>
            <View style={styles.labelContainer}>
            <Text style={{color: '#36454F'}}>Last Name</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput value={userLastName} onChangeText={value => setUserLastName(value)}/>
            </View>
            </View>
            <View>
            <View style={styles.labelContainer}>
            <Text style={{color: '#36454F'}}>Email Address</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput  value={userEmail} onChangeText={value => setUserEmail(value)}/>
            </View>
            </View>
            <View style={{flexDirection: "row", alignSelf: 'stretch', marginTop: 20}}>
            <TouchableOpacity style={styles.buttonSend} onPress={buttonSendClicked}>
                <Text style={styles.sendText}>SEND</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonClear} onPress={buttonClearClicked}>
                <Text>CLEAR</Text>
            </TouchableOpacity>
            </View>
            
        </View>
        
    );
}

const styles = StyleSheet.create({
regForm: {
alignSelf: "stretch"
},
header: {
    fontSize: 24,
    marginBottom: 60,
    alignSelf: 'center'
},
labelContainer: {
    backgroundColor: "white", // Same color as background
    alignSelf: "flex-start", // Have View be same width as Text inside
    paddingHorizontal: 3, // Amount of spacing between border and first/last letter
    marginStart: 10, // How far right do you want the label to start
    zIndex: 1, // Label must overlap border
    elevation: 1, // Needed for android
    shadowColor: "white", // Same as background color because elevation: 1 creates a shadow that we don't want
    position: "absolute", // Needed to be able to precisely overlap label with border
    top: -12, // Vertical position of label. Eyeball it to see where label intersects border.
},
inputContainer: {
    borderWidth: 1, // Create border
    borderRadius: 8, // Not needed. Just make it look nicer.
    padding: 12, // Also used to make it look nicer
    zIndex: 0, // Ensure border has z-index of 0
    marginBottom: 24,
    borderColor: "grey"
},
buttonSend: {
    backgroundColor: 'black',
    marginRight: 8,
    alignSelf: 'stretch',
    alignItems: 'center',
    flex: 1,
    padding: 12,
    borderRadius: 8
},
buttonClear: {
    backgroundColor: 'white',
    marginLeft: 8,
    alignSelf: 'stretch',
    alignItems: 'center',
    flex: 1,
    padding: 12,
    borderWidth: 1, 
    borderRadius: 8, 
},
sendText: {
    color: "white"
}
});