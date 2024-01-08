import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, ToastAndroid } from 'react-native';
import api from '../api/api';

export const checkAuth = async (setAuth) => {
    const token = await AsyncStorage.getItem('id');
    if (token !== null) {
        setAuth(true);
    } else {
        setAuth(false);
    }
}

export const createUser = async (nome, email, senha) => {
    try {
        const res = await api.post('/api/usuarios', {
            nome: nome,
            email: email,
            senha: senha
        });
        console.log(res.data);
        Alert.alert('Usuário registrado com sucesso!');
    } catch (error) {
        console.error(error);
        Alert.alert('Um erro ocorreu ao tentar registrar o usuário');
    }
};


export const loginUser = async (email, senha, setAuth) => {
    try {
        const response = await api({
            method: 'post',
            url: '/api/usuarios/login',
            data: {
                email: email,
                senha: senha,
            }
        });

        await AsyncStorage.setItem("id", response.data.token);
        // pegar informações do usuario para colocar no profile
        const userInfo = {
            id: response.data.id,
            nome: response.data.usuario.nome,
            email: response.data.usuario.email,
            perfil: response.data.usuario.perfil,
            imagemUrl: response.data.usuario.imagemUrl,
            telefone: response.data.usuario.telefone
        };
        
        await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        console.log(`token: ${response.data.token}`)
        console.log(userInfo)
        // chamar checkAuth depois de logar
        checkAuth(setAuth);

    } catch (error) {
        console.log(email,senha,'teste')
        //console.error(error);
        Alert.alert(error.message)
    }
}


export const logout = async (setAuth) => {
    try {
        await AsyncStorage.removeItem('id');
        await AsyncStorage.removeItem('token');
        setAuth(false);
        ToastAndroid.show('Sessão finalizada', ToastAndroid.TOP);
        console.log('Logout successful!');
    } catch (e) {
        console.error('Logout failed!');
    }
}


