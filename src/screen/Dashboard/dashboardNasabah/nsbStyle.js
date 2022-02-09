import { StyleSheet } from "react-native";

export const styleNSB = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 25,
        paddingTop: 25,
    },
    img: {
        alignSelf: 'center',
    },
    bcc: {
        paddingHorizontal:5,
        paddingVertical: 5,
        backgroundColor: '#2690A8',
        flexDirection: 'row',
        borderRadius: 20,
        marginTop: 15,
    },
    pp: {
        width: 100,
        height: 100,
        backgroundColor: "#FFF",
        borderRadius: 100,
        borderWidth: 1,
        alignItems: "center",
        borderColor: "#000",

    },
    boxText: {
        marginLeft: 20,
        alignSelf: 'center',
    },
    txt1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#fff",
    },
    txt2: {
        fontSize: 18,
        fontStyle: 'normal',
        color: "#fff",
    },
    viewLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        padding: 0,
        marginTop: 10
    },
    txt3: {
        fontSize: 20,
        textAlign: 'center',
        color: "#4AB767",
        fontWeight: 'bold'
    },

})