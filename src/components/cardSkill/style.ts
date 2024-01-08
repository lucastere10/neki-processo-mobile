import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        flexDirection: 'row',
        width:370,
        height: 60,
        alignItems: 'center',
        alignSelf:'center',
        //justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius:10,
        gap:2
    },
    produto: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    info: {
        flexDirection: 'column',
        padding: 8,
        marginLeft: 10
    },
    image: {
        width: 60,
        height: 60,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
    },
    title: {
        fontSize: 16,
        overflow:'hidden'
    },
    price: {
        fontSize: 12
    }
})