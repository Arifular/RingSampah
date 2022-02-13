import { StyleSheet } from "react-native";

export const StyleSell = StyleSheet.create({
    container: {
        padding: 25,
        flex: 1,
        backgroundColor: "#FFF",
    },
    img: {
        alignSelf: 'center',
    },
    boxIcon: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        paddingHorizontal: 0,
        marginTop: 15,
        
    },
    boxBesi: {
        // width: 100,
        // height: 100,
        paddingHorizontal: 30,
        paddingVertical: 30,
        backgroundColor: "#2C3E50",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    boxKertas: {
        // width: 100,
        // height: 100,
        paddingHorizontal: 30,
        paddingVertical: 30,
        backgroundColor: "#F1C40F",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    boxKaca: {
        // width: 100,
        // height: 100,
        paddingHorizontal: 30,
        paddingVertical: 30,
        backgroundColor: "#FD79A8",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 15,
    },
    boxPlastic: {
        // width: 100,
        // height: 100,
        paddingHorizontal: 30,
        paddingVertical: 30,
        backgroundColor: "#16A085",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 15,
    },
    icon: {
        height: 80,
        width: 80,
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
        marginTop: 10,
    },
    txtBtn: {
        fontSize: 20,
        color: "#FFF",
        textAlign: "center",
    },
})