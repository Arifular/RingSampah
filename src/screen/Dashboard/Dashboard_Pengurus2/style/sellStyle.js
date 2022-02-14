import { StyleSheet } from "react-native";

export const StyleSell = StyleSheet.create({
    container: {
        padding: 25,
        flex: 1,
        // backgroundColor: "#FFF",
    },
    img: {
        alignSelf: 'center',
    },
    boxCategori: {
        // width: 310,
        // height: 284,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: "#22A6B3",
        marginTop: 15,
    },
    txt: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold"
    },
    boxtxt: {
        flexDirection: "row"
    },
    input: {
        paddingVertical: 5,
        backgroundColor: "#344356",
        borderRadius: 20,
        marginTop: 5,
        marginBottom: 10,
    },
    txtInput: {
        fontSize: 16,
        color: "#FFF",
    },
    btnJual : {
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: "#4AB767",
        marginTop: 20,
    },
    txtBtn: {
        fontSize: 30,
        color: "#FFF",
        textAlign: "center",
    },
})