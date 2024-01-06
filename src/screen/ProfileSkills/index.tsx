import React, { useEffect, useState } from "react"
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity } from "react-native"
import { styles } from "./style"
import { CardSkill } from "../../components/cardSkill"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ModalAdicionarSkill } from "../../components/modalAdicionarSkill";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../../service/api/api"
import { ModalAdicionarPerfilSkill } from "../../components/modalAdicionarPerfilSkill";
import { CardPerfilSkill } from "../../components/cardPerfilSkill";

export const ProfileSkills = () => {
//const [searchInput, setSearchInput] = useState('');
const [perfilSkills, setPerfilSkills] = useState([]);
const [triggerEdit, setTriggerEdit] = useState(false);
const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

function abrirModal() {
  setIsModalVisible(true);
}

useEffect(() => {
  handleSearchSubmit();
}, [triggerEdit]);


const handleSearchSubmit = async () => {
  const token = await AsyncStorage.getItem('id');
  console.log(`TOKEN: `, token)
  try {
    const response = await api.get('/api/perfilskills', {
      headers: {
        Authorization: `${token}`
      }
    });
    setPerfilSkills(response.data);
    console.log(response.data)
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};

return (
  <SafeAreaView style={styles.container}>
    <View style={styles.containerUpper}>
      <Image style={{ marginTop: 30 }} source={require('../../assets/images/ShoinLogo.png')} />
    </View>
    <View style={styles.containerLower}>
      <Text style={[styles.text, { fontFamily: 'Poppins-SemiBold' }]}>Habilidades do Usuário</Text>
    </View >
    <View style={styles.containerButton}>
      <View style={{ flexDirection: 'row' }}>
      </View>
      <TouchableOpacity style={styles.addSkillButton} onPress={abrirModal}>
        <MaterialCommunityIcons name="cart-remove" size={18} color="white" />
        <Text style={[styles.addSkill, { fontFamily: 'Poppins-SemiBold' }]} >Adicionar Habilidade</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.containerCard}>
      <FlatList
        data={perfilSkills}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(data) => data.title}
        renderItem={({ item }) => (
          <CardPerfilSkill
            perfilSkill={item}
            triggerEdit={triggerEdit}
            setTriggerEdit={setTriggerEdit}
          />
        )}
      />
    </View>
    {isModalVisible &&
      <ModalAdicionarPerfilSkill
        triggerEdit={triggerEdit}
        setTriggerEdit={setTriggerEdit}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible} />}
  </SafeAreaView>
);
}