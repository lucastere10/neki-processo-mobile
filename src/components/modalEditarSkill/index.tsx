import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal, ActivityIndicator, TextInput, Alert } from 'react-native';
import { styles } from './style';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { skillSchema } from "../../schemas/skillSchema";
import api from "../../service/api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface ModalEditarSkillProps {
	skill: skillType;
	isModalVisible: boolean;
	triggerEdit: boolean;
	setTriggerEdit: (value: boolean) => void;
	setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

export const ModalEditarSkill = ({
	skill,
	isModalVisible,
	triggerEdit,
	setIsModalVisible,
	setTriggerEdit
}: ModalEditarSkillProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		//writeProductDetails(id)
	}, []);

	const {
		register,
		handleSubmit,
		control,
		watch,
		formState: { errors }
	} = useForm<skillType>({
		resolver: yupResolver(skillSchema)
	});

	const onSubmit: SubmitHandler<skillType> = data => {
		if (data.skillNome == null || data.skillNome === '') {
			data.skillNome = skill.skillNome;
		}
		console.log('teste')
		editSkill(data, skill.skillId);
	};

	const editSkill = async (data: skillType, skillId: number) => {
		const token = await AsyncStorage.getItem('id');
		try {
			const response = await api.put(`/api/skills/${skillId}`, {
				skillNome: data.skillNome,
				skillDescricao: data.skillDescricao,
				skillUrl: data.skillUrl,
			}, {
				headers: {
					Authorization: `${token}`
				}
			});
			console.log('Response data:', response.data);
			Alert.alert('Habilidade editada com sucesso!');
			setIsModalVisible(false);
			setTriggerEdit(!triggerEdit);
		} catch (err: any) {
			console.log(typeof err);
			alert(err.response.data.message);
		}
	};

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
								{/* Modal de Textos */}
								<View style={styles.textContainer}>
									<View style={{ justifyContent: "center" }}>
										<Text style={styles.title}>Editar Habilidade</Text>
									</View>
									<View style={{ marginBottom: 3 }}>
										<Text style={styles.label}>Nome</Text>
										{errors.skillNome && (
											<Text style={styles.errorLabel}>
												{errors.skillNome.message}
											</Text>
										)}
										<View style={styles.inputContainer}>
											<Controller
												control={control}
												rules={{
													required: true,
												}}
												render={({ field: { onChange, onBlur, value } }) => (
													<TextInput
														onBlur={onBlur}
														onChangeText={onChange}
														value={value}
														style={styles.title}
														>
													</TextInput>
												)}
												name="skillNome"
												defaultValue={skill.skillNome}
											/>
										</View>
									</View>
									<View style={{ marginBottom: 3 }}>
										<Text style={styles.label}>Descricao</Text>
										{errors.skillDescricao && (
											<Text style={styles.errorLabel}>
												{errors.skillDescricao.message}
											</Text>
										)}
										<View style={styles.inputContainer}>
											<Controller
												control={control}
												render={({ field: { onChange, onBlur, value } }) => (
													<TextInput
														onBlur={onBlur}
														onChangeText={onChange}
														value={value}
														style={styles.title}
														>
													</TextInput>
												)}
												name="skillDescricao"
												defaultValue={skill.skillDescricao}
											/>
										</View>
									</View>
									<View style={{ marginBottom: 3 }}>
										<Text style={styles.label}>Url</Text>
										<View style={styles.inputContainer}>
											<Controller
												control={control}
												render={({ field: { onChange, onBlur, value } }) => (
													<TextInput
														onBlur={onBlur}
														onChangeText={onChange}
														value={value}
														style={styles.title}
														>
													</TextInput>
												)}
												name="skillUrl"
												defaultValue={skill.skillUrl}
											/>
										</View>
									</View>
								</View>
								<TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.addSkillButton}>
									<Text style={styles.addSkillButtonText}>Submit</Text>
								</TouchableOpacity>
							</>
						}
					</TouchableOpacity>
				</TouchableOpacity>
			</Modal>
		</>
	)
}