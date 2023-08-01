import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import Button from "../components/Button/Button";

function MemberResult({route,navigation}){
    
    const {user} = route.params;
    return(
        <SafeAreaView>
            <Text style={styles.message}>Kayıt Tamamlandı!</Text>
            <Text style={styles.label}> Üye Adı: {user.userName} </Text>
            <Text style={styles.label}> Üye Soyadı: {user.userSurname}</Text>
            <Text style={styles.label}> Üye Yaş: {user.userAge}</Text>
            <Text style={styles.label}> Üye E-posta: {user.userMail}</Text>
            <View style={styles.container}>
                <Button text="Kayıt Ekranına Dön" onPress={()=>navigation.goBack('Welcome')} />
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    label: {
         fontWeight: 'bold',
         fontSize: 20,
         margin: 10,
         color: 'black' 
    },  
    message: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight:'bold',
        fontSize: 50,
        textAlign: 'center',
        color: 'black',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
}) 
export default MemberResult;