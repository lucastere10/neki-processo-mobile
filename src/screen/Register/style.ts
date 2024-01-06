import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%', 
        height: '100%'

    },
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff'
  },
  input: {
    width: '85%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 18,
    borderRadius: 30,
    backgroundColor: '#E7DCDA',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputText:{
      fontSize:16,
      textAlign: 'center', 
      width: '100%', 
  },
  Botao:{
    paddingHorizontal: 24,
    paddingVertical:5,
    backgroundColor: '#7E8F7F',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
  Letras:{
    color: '#fff',
    
  }
   
});