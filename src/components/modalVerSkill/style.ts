import { StyleSheet, StatusBar  } from "react-native";

export const styles = StyleSheet.create({
    modal:{
        flex:1,
        height:'100%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    modalContainer: {
        width:340,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        alignItems: "flex-start",
        shadowColor: "#000",
        paddingBottom:16,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        maxHeight: "80%",
    },
    containerImage:{
        width:340,
        height:170,

    },
    image:{
        width:340,
        height:170,
        borderTopLeftRadius:12,
        borderTopRightRadius:12
    },
    close:{
        position:'absolute',
        top: 160, 
        right: 10, 
        zIndex:1
    },
    brand:{
        fontSize:12,
        color:'#949494',
    },
    rating:{        
        fontSize:16,
        color:'#131313',
    },
    stock:{        
        fontSize:16,
        color:'#D9D9D9',
    },
    title:{
        fontSize:18,
        color:'#131313',
    },
    description:{
        fontSize:18,
        color:'#949494',
    },
    price:{
        fontSize:24,
        color:'#131313',
    },
    containerText:{
        paddingLeft:16,
        paddingTop:5,
        paddingRight:8,
    }
})