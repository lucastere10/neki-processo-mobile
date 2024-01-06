import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F4F4F4',
        flex:1
    },
    containerUpper: {
        backgroundColor:'#4F392B',
        justifyContent:"center",
        alignItems:'center',
        height:120
    },
    containerLower:{
        backgroundColor:'#7E8F7F',
        justifyContent:"center",
        alignItems:'center',
        height:40
    },
    containerCard:{
        marginTop:20,
        justifyContent:'center',
        alignItems:"center"
    },
    containerProducts:{
        justifyContent:'center',
        alignItems:"center",
        marginTop:25,
        gap:16
    },
    containerLowerCard:{
        justifyContent:'center',
        alignItems:"center",
        marginTop:40,
        flexDirection:'row',
        gap:20
    },
    text:{
        fontSize:20,
        color:'#3F3335',
        textDecorationLine:'underline'
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        color:'#3F3335',
        textDecorationLine:"underline"
    },
    cardcontainer:{
        
        padding: 20,
        width: '100%',
        alignItems:"flex-start",
        backgroundColor: '#E7DCDA', 
        
         
    },
    text2:{
        marginBottom: 15,
        fontSize: 20,
        
        
    },
    profileImage:{
        width: 150,
        height:150,
        borderRadius: 100,
        borderWidth: 1,
        borderColor:'black',
        marginVertical: 20,
        marginLeft: 120  
    },
    cardtotal:{
        backgroundColor: '#E7DCDA',
        flex: 1
        
    },
    boldText: {
        fontWeight: 'bold',
        color: '#3F3335', 
      },
    logout:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:16,
        borderRadius:12,
        padding:10,
        paddingHorizontal:20,
        gap:8
    },
    logoutText:{
        color:'#FFFFFF',
        fontSize:20,
    }
    
});