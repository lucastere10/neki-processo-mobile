import React, { useEffect, useState } from "react"
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity } from "react-native"
import { styles } from "./style"
import { CardSkill } from "../../components/cardSkill"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ModalAdicionarSkill } from "../../components/modalAdicionarSkill";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../../service/api/api"

export const Skills = () => {

  //const [searchInput, setSearchInput] = useState('');
  const [skills, setSkills] = useState([]);
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerUpper}>
        <Image style={[styles.image, { marginTop: 30 }]} source={require('../../assets/images/logo-blank.png')} />
        <Text style={[styles.titleText, { fontFamily: 'Poppins-SemiBold', marginTop: 36 }]}>SKILL+</Text>
      </View>
      <View style={styles.containerLower}>
        <Text style={[styles.text, { fontFamily: 'Poppins-SemiBold' }]}>Habilidades</Text>
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
          data={skills}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(data) => data.skillId}
          renderItem={({ item }) => (
            <CardSkill
              key={item.skillId}
              skill={item}
              triggerEdit={triggerEdit}
              setTriggerEdit={setTriggerEdit}
            />
          )}
        />
      </View>
      {isModalVisible &&
        <ModalAdicionarSkill
          triggerEdit={triggerEdit}
          setTriggerEdit={setTriggerEdit}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible} />}
    </SafeAreaView>
  );

}