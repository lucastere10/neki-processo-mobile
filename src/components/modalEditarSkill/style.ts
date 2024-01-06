import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContainer: {
        width: 340,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        alignItems: "flex-start",
        shadowColor: "#000",
        paddingBottom: 16,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        maxHeight: "80%",
        padding: 16
    },
    inputContainer: {
        width: 280,
        borderBottomWidth: 1
    },
    textContainer: {
        paddingLeft: 16,
        paddingTop: 5,
        paddingRight: 8,
        gap: 8
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#131313',
    },
    errorLabel: {
        fontSize: 12,
        color: '#DF3232',
    },
    label: {
        fontSize: 16,
        color: '#131313',
        marginBottom: 2,
        marginTop: 6
    },
    addSkillButton: {
        backgroundColor: '#2D939C',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 6,
        gap: 8,
        marginLeft: 16,
        marginTop: 16
    },
    addSkillButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
    }
})