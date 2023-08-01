import React from "react";
import { Text, View, TextInput } from "react-native";

import styles from './Input.style'

function Input({label, onChangeText, placeholder}) {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <TextInput placeholder={placeholder} onChangeText={onChangeText}/>
            </View>
           
        </View>
    )
}

export default Input;