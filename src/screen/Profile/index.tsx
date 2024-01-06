import { View, Text, Image, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from "react-native"
import React, { useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./style"
import { logout } from "../../service/auth/auth";
import { MaterialIcons } from '@expo/vector-icons';

export const Profile = ({ setAuth }) => {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [url, setUrl] = useState();
    const [perfil, setPerfil] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('userInfo');
                if (value !== null) {
                    const userInfo = JSON.parse(value);
                    setEmail(userInfo.email);
                    setNome(userInfo.nome);
                    setPerfil(userInfo.perfil)
                    setUrl(userInfo.imagemUrl)
                }
            } catch (e) {
                console.log(e);
            }
        };

        getData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerUpper}>
                <Image style={{ marginTop: 30 }} source={require('../../assets/images/ShoinLogo.png')} />
            </View>
            <View style={styles.containerLower}>
                <Text style={[styles.text, { fontFamily: 'Poppins-SemiBold' }]}>Perfil</Text>
            </View >
            <View style={styles.cardtotal} >
                <Image source={{ uri: url }} style={styles.profileImage} />
            </View>
            <View style={styles.cardcontainer}>
                <Text style={styles.text2}><Text style={styles.boldText}>Nome: </Text> {nome}</Text>
                <Text style={styles.text2}><Text style={styles.boldText}>E-Mail: </Text>{email}</Text>
                <Text style={styles.text2}><Text style={styles.boldText}>Perfil: </Text>{perfil}</Text>
                <View style={{ flexDirection: 'row', gap: 12 }}>
                    <TouchableOpacity onPress={() => logout(setAuth)}>
                        <View style={[styles.logout, { backgroundColor: '#3F3335', }]}>
                            <MaterialIcons style={{ color: '#FFFFFF' }} name="logout" size={24} color="black" />
                            <Text style={styles.logoutText}>Deslogar</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={[styles.logout, { backgroundColor: '#7E8F7F', }]}>
                            <MaterialIcons style={{ color: '#FFFFFF' }} name="add-shopping-cart" size={24} color="black" />
                            <Text style={styles.logoutText}>Carrinho</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};