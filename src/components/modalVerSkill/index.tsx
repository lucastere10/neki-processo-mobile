import React, { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity, Modal, ActivityIndicator, Image } from 'react-native';
import { styles } from './style';
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../service/api/api";


interface ModalVerSkillProps {
	skill: skillType;
	isModalVisible: boolean;
	triggerEdit: boolean;
	setTriggerEdit: (value: boolean) => void;
	setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

export const ModalVerSkill = ({
	skill,
	isModalVisible,
	triggerEdit,
	setIsModalVisible,
	setTriggerEdit
}: ModalVerSkillProps) => {

	useEffect(() => {
		getSkill(skill.skillId);
	}, [triggerEdit]);

	const getSkill = async (skillId: number) => {
		const token = await AsyncStorage.getItem('id');
		try {
			const response = await api.get(`/api/skills/${skillId}`, {
				headers: {
					Authorization: `${token}`
				}
			});
			console.log('Response data:', response.data);
			setTriggerEdit(!triggerEdit);
		} catch (err: any) {
			console.log(typeof err);
			alert(err.response.data.message);
		}
	};

	useState

	return (
		<>
			<Modal
				animationType="slide"
				transparent={true}
				visible={isModalVisible}
				onRequestClose={() => {
					setIsModalVisible(false);
				}}
			>
				<TouchableOpacity style={styles.modal} onPressOut={() => setIsModalVisible(false)}>
					<TouchableOpacity activeOpacity={1} onPress={() => { }} style={styles.modalContainer}>
						{
							<>
								{/* Modal de Imagem */}
								<View style={styles.containerImage}>
									<Image style={styles.image} source={{ uri: skill.skillUrl }} />
								</View>
								{/* Modal de Textos */}
								<View style={styles.containerText}>
									<View style={{ marginBottom: 3 }}>
										<Text style={styles.title}>{skill.skillNome}</Text>
									</View>
									<View>
										<Text style={styles.description}>{skill.skillDescricao}</Text>
									</View>
									<View style={{
										marginTop: 11,
										flexDirection: 'row',
										alignItems: 'center',
										gap: 16

									}}>
									</View>
								</View>
							</>
						}
					</TouchableOpacity>
				</TouchableOpacity>
			</Modal>
		</>
	)
}