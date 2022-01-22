import {StyleSheet} from "react-native";

export const StyleRegister = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 25,
        paddingVertical: 25,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom : 25,
    },
    headerText: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
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
        marginBottom: 24,
    },
    inputEmail: {
        color: "#000",
        fontSize: 16,
    },
    inputPass : {
        color: "#000",
        fontSize: 16,
        width: "90%"
    },
    text1: {
        fontSize: 18,
        color: "#000",
        alignSelf: "flex-end",
        marginBottom: 25,
    },
    text2: {
        fontSize: 18,
        color: "#000080",
        textAlign: "center",
    },
    btnDaftar : {
        paddingVertical: 20,
        borderRadius: 10,
        backgroundColor: "#4AB767",
    },
    text3: {
        fontSize: 20,
        color: "#FFF",
        textAlign: "center",
    },
})