import React, { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity, Image, Alert, ToastAndroid } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { styles } from './style';
import api from "../../service/api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalEditarPerfilSkill } from "../modalEditarPerfilSkill";

export interface perfilSkillProps {
    perfilSkill: profileSkillType
    triggerEdit: boolean
    setTriggerEdit: (value: boolean) => void;
}

export const CardPerfilSkill = ({ perfilSkill, triggerEdit, setTriggerEdit }: perfilSkillProps) => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    function abrirModal() {
        setIsModalVisible(true);
      }
    
    const confirmarDeletarEvento = async (perfilSkillId: number) => {
        const token = await AsyncStorage.getItem('id');

        Alert.alert(
            "Deletar Habilidade",
            "Deseja realmente deletar a habilidade?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: async () => {
                        try {
                            const response = await api.delete(
                                `/api/perfilskills/${perfilSkillId}`, {
                                headers: {
                                    Authorization: `${token}`
                                }
                            });
                            console.log('Skill deleted:', response);
                            setTriggerEdit(!triggerEdit);
                            ToastAndroid.show('Habilidade deletada com sucesso', ToastAndroid.TOP);
                        } catch (err) {
                            console.log('Erro ao deletar habilidade:', err);
                            ToastAndroid.show('Erro ao deletar habilidade', ToastAndroid.TOP);
                        }
                    }
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.produto}>
                <Image source={{ uri: perfilSkill.skill.skillUrl }} style={styles.image} />
                <View style={styles.info}>
                    <View style={{ width: 200 }}>
                        <Text style={[styles.title, { fontFamily: 'Poppins-Bold' }]} numberOfLines={1}>
                            {perfilSkill !== undefined ? `${perfilSkill.skill.skillNome}` : 'Loading...'}
                        </Text>
                    </View>
                    <Text style={[styles.price, { fontFamily: 'Poppins-Regular' }]}>
                        {perfilSkill !== undefined ? `Versão: ${perfilSkill.perfilSkillVersao}` : 'Loading...'}
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', gap: 16 }}>
                <TouchableOpacity onPress={abrirModal}>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <Feather name="edit-2" size={24} color="gray" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { confirmarDeletarEvento(perfilSkill.perfilSkillId) }}>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <AntDesign name="closecircleo" size={24} color="#DF3232" />
                    </View>
                </TouchableOpacity>
            </View>
            {isModalVisible &&
                <ModalEditarPerfilSkill
                    perfilSkill={perfilSkill}
                    triggerEdit={triggerEdit}
                    setTriggerEdit={setTriggerEdit}
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible} />}
        </View>
    )
}
