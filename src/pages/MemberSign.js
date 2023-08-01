import React, {useState} from "react";
import { View, SafeAreaView, Text, Alert, StyleSheet } from "react-native";

import Input  from '../components/input'
import Button from "../components/Button/Button";


function MemberSign({navigation}) {

  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);

  function handleSubmit(){
    if (!userName || !userSurname || !userAge || !userMail) {
        Alert.alert('Kebap Fitness', 'Bilgiler Boş Bırakılamaz');
        return;
    }
    //girilen değerleri göndermek için 
      const user={
        userName,
        userSurname,
        userAge,
        userMail,
      }
      navigation.navigate('MemberResult', {user});
    }

    return (
        <SafeAreaView>
          <Input label="Üye Adı" placeholder="Üye İsmini Giriniz..." onChangeText={setUserName} />
          <Input label="Üye Soyadı" placeholder="Üye Soyismini Giriniz..." onChangeText={setUserSurname} />
          <Input label="Üye Yaşı" placeholder="Üye Yaşını Giriniz..." onChangeText={setUserAge} />
          <Input label="Üye E-posta" placeholder="Üye E-posta Adresini Giriniz..." onChangeText={setUserMail} />
          <View style={styles.container}> 
            <Button onPress={handleSubmit} text='Kaydı Tamamla'/>
          </View>
          
        </SafeAreaView>
      )
    }

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
        },
    }) 

    export default MemberSign