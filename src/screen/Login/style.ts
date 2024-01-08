// style.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%', 
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '85%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 16,
    borderRadius: 30,
    backgroundColor: '#E7DCDA',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputText: {
    textAlign: 'center', 
    width: '100%', 
    paddingLeft: 30, 
    paddingRight: 60, 
  },
  inputTextPassword: {
    textAlign: 'center', 
    width: '90%', 
    paddingLeft: 30, 
    paddingRight: 30, 
  },
  Botao: {
    paddingHorizontal: 24,
    paddingVertical:5,
    backgroundColor: '#7E8F7F',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
  botaoText: {
    color: 'white',
  },
  Letras: {
    color: '#fff',
    marginTop:30,
    marginBottom: 10,
    fontSize: 18 
  },
  cadastroText: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 10, 
  },
});

export default styles;
