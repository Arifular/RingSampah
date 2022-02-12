import {StyleSheet} from "react-native"

export const StyleBook = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 25,
        backgroundColor: "#FFF",
    },
    txt: {
        color: "#000",
        fontSize: 24,
        alignSelf: "center",
        fontWeight: "bold",
    },
    sub: {
        fontSize: 20,
        color: "#000",
        marginTop: 10,
    },
    boxTxt: {
        padding: 10,
        backgroundColor: "#4AB767",
        borderRadius: 10,
    },
    txtList: {
        fontSize: 16,
        color: "#FFF",
        fontStyle: "normal",
    },
    list: {
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: 10,
    }
})