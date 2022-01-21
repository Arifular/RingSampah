import { StyleSheet } from "react-native";

export const styleLogin = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        backgroundColor: "#FFF",
        flex: 1,
        paddingVertical: 25,
        // alignItems: "center",
    },
    logo: {
        width: 100,
        height: 116,
        alignSelf: "center",
    },
    text1: {
        fontSize: 18,
        color: "#000",
        textAlign: "center",
        marginTop: 41,
        marginBottom: 31,
    },
    text2: {
        fontSize: 18,
        color: "#000080",
        textAlign: "center",
    },
    boxEmail: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000",
        marginBottom: 24,
    },
    boxPass: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
    },
    inputEmail: {
        color: "#000",
        // backgroundColor: "green",
        fontSize: 16,
    },
    inputPass : {
        color: "#000",
        // backgroundColor: "red",
        fontSize: 16,
        width: "90%"
    },
    btnMasuk : {
        paddingVertical: 20,
        // paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: "#4AB767",
        // flexDirection: "column-reverse",
    },
    text3: {
        fontSize: 20,
        color: "#FFF",
        textAlign: "center",
    },
})