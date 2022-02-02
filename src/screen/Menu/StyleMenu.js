import { StyleSheet} from 'react-native'

export const StyleMenu = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingVertical: 25,
        paddingHorizontal: 25,
    },
    container2: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    textMenu: {
        fontSize:35, 
        color: '#000'
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
    }
});