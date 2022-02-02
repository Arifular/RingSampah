import{ StyleSheet}  from "react-native";

export const StyleProfile = StyleSheet.create({
    container : {
        backgroundColor: '#fff',
        flex: 1,
        paddingVertical: 25,
        paddingHorizontal: 25
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textProfile: {
        fontSize:35, 
        color: '#000',
    },
    imagePP: {
        alignSelf: 'center',
        marginTop: 20
    },
    boxEmail: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000",
        marginBottom: 24,
        marginTop: 15
    },
    inputEmail: {
        color: "#000",
        // backgroundColor: "green",
        fontSize: 16,
    },
    textAtas: {
        color: "#000",
        fontSize: 16,
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
    inputPass : {
        color: "#000",
        // backgroundColor: "red",
        fontSize: 16,
        width: "90%"
    },
    tombolMasuk: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000",
        marginBottom: 24,
        marginTop: 15,
        backgroundColor: '#4AB767'
    },
    textButton: {
        fontSize: 25,
        alignSelf: 'center',
        color: '#000'
    }
});