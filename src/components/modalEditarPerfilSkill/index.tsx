import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal, ActivityIndicator, TextInput, Alert } from 'react-native';
import { styles } from './style';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import api from "../../service/api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { profileEditSkillSchema } from "../../schemas/profileEditSkillSchema";


interface ModalEditarPerfilSkillProps {
	perfilSkill: profileSkillType;
	isModalVisible: boolean;
	triggerEdit: boolean;
	setTriggerEdit: (value: boolean) => void;
	setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

export const ModalEditarPerfilSkill = ({
	perfilSkill,
	isModalVisible,
	triggerEdit,
	setIsModalVisible,
	setTriggerEdit
}: ModalEditarPerfilSkillProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const {
		register,
		handleSubmit,
		control,
		watch,
		formState: { errors }
	} = useForm<profileSkillType>({
		resolver: yupResolver(profileEditSkillSchema)
	});

	const onSubmit: SubmitHandler<profileSkillType> = data => {
		if (data.perfilSkillVersao == null || data.perfilSkillVersao === '') {
			data.perfilSkillVersao = perfilSkill.perfilSkillVersao;
		}
		console.log('teste')
		editSkill(data, perfilSkill.perfilSkillId);
	};

	const editSkill = async (data: profileSkillType, perfilSkillId: number) => {
		const token = await AsyncStorage.getItem('id');
		try {
			const response = await api.put(`/api/perfilskills/${perfilSkillId}`, {
				perfilSkillVersao: data.perfilSkillVersao,
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
										<Text style={styles.label}>Versão</Text>
										{errors.perfilSkillVersao && (
											<Text style={styles.errorLabel}>
												{errors.perfilSkillVersao.message}
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
												name="perfilSkillVersao"
												defaultValue={perfilSkill.perfilSkillVersao}
											/>
										</View>
									</View>
								</View>
								<TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.addSkillButton}>
									<Text style={styles.addSkillButtonText}>Editar</Text>
								</TouchableOpacity>
							</>
						}
					</TouchableOpacity>
				</TouchableOpacity>
			</Modal>
		</>
	)
}