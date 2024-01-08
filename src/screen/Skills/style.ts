import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F4F4F4',
        flex:1
    },
    containerUpper: {
        backgroundColor:'#2D939C',
        justifyContent:"center",
        alignItems:'center',
        height:120,
        flexDirection:'row',
        gap:8
    },    
    containerLower:{
        backgroundColor:'#91C4C9',
        justifyContent:"center",
        alignItems:'center',
        height:40
    },
    image:{
        width: 70, 
        height: 70
    },
    titleText:{
        fontSize:48,
        color:'#f4f4f4',
    },
    containerCard:{
        flex:1,
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center',
    },
    containerButton:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:16,
        height:60,
        gap:24,
    },
    priceText:{
        fontSize:20,
    },
    text:{
        fontSize:24,
        color:'#181818',
    },
    addSkillButton:{
        backgroundColor:'#2D939C',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:6,
        paddingHorizontal:10,
        paddingVertical:4,
        gap:8
    },
    addSkill:{
        color:'#FFFFFF',
        fontSize:14,
    }
    
});