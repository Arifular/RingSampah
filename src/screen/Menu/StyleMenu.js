import { StyleSheet} from 'react-native'

export const StyleMenu = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingVertical: 25,
        paddingHorizontal: 25,
    },
    textMenu: {
        fontSize:35, 
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: 'center',
    },
    containerBox: {
       justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 0,
        paddingVertical: 5,
        borderBottomWidth: 2,
        borderColor: "#000",
        marginTop: 40,
        alignItems: "center",
    },
    textBox: {
        fontSize: 35,
        color: '#000'
    },
    btn: {
        paddingHorizontal: 0,
        paddingVertical: 5,
        backgroundColor: "#ff4757",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 350
    },
    textBtn: {
        fontSize: 35,
        color: '#000'
    }
});