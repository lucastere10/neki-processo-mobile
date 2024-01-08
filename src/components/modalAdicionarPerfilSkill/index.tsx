import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal, ActivityIndicator, TextInput, Alert } from 'react-native';
import { styles } from './style';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import api from "../../service/api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from 'react-native-dropdown-picker';
import { profileSkillSchema } from "../../schemas/profileSkillSchema";


interface ModalAdicionarPerfilSkillProps {
	isModalVisible: boolean,
	triggerEdit: boolean
	setTriggerEdit: (value: boolean) => void;
	setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

export const ModalAdicionarPerfilSkill = ({
	isModalVisible,
	triggerEdit,
	setIsModalVisible,
	setTriggerEdit
}: ModalAdicionarPerfilSkillProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const [skills, setSkills] = useState([])

	const {
		register,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<profileSkillCreateType>({
		resolver: yupResolver(profileSkillSchema)
	});

	function handleButton() {
		setIsModalVisible(false);
	}

	const onSubmit: SubmitHandler<profileSkillCreateType> = data => {
		console.log('DATA TESTE:', data)
		newProfileSkill(data);
	};

	useEffect(() => {
		getSkills();
	}, []);


	const getSkills = async () => {
		const token = await AsyncStorage.getItem('id');
		try {
			const response = await api.get('/api/skills', {
				headers: {
					Authorization: `${token}`
				}
			});
			setSkills(response.data);
			console.log(response.data)
		} catch (err) {
			console.error('Error fetching data:', err);
		}
	};

	const newProfileSkill = async (data: profileSkillCreateType) => {
		const token = await AsyncStorage.getItem('id');
		try {
			const response = await api.post('/api/perfilskills', {
				perfilSkillVersao: data.perfilSkillVersao,
				skillNome: data.skillNome,
			}, {
				headers: {
					Authorization: `${token}`
				}
			});
			console.log('Response data:', response.data);
			Alert.alert('Habilidade cadastrada com sucesso!');
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
										<Text style={styles.title}>Nova Habilidade</Text>
									</View>
									<View style={{ marginBottom: 3 }}>
										<Text style={styles.label}>Habilidade</Text>
										{errors.skillNome && (
											<Text style={styles.errorLabel}>
												{errors.skillNome.message}
											</Text>
										)}
										<View style={styles.inputDropdown}>
											<Controller
												control={control}
												render={({ field: { onChange, value } }) => (
													<DropDownPicker
														items={skills.map(
															skill => ({ label: skill.skillNome, value: skill.skillNome })
														)}
														style={{ zIndex: 10 }}
														multiple={false}
														value={value}
														setValue={onChange}
														onChangeValue={(value) => {
															onChange(value);
														}}
														open={dropdownOpen}
														setOpen={() => { setDropdownOpen(!dropdownOpen) }}
													/>
												)}
												name="skillNome"
											/>
										</View>
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
												render={({ field: { onChange, onBlur, value } }) => (
													<TextInput
														onBlur={onBlur}
														onChangeText={onChange}
														value={value}
														style={styles.title}>
													</TextInput>
												)}
												name="perfilSkillVersao"
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