import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import Button from "../components/Button/Button";

function Welcome({navigation}) {

    function goToMemberSign(){
        navigation.navigate('MemberSignScreen')
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Kebap Fitness</Text>
            <Button text="Kayıt" onPress={goToMemberSign} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
    }
})

export default Welcome;