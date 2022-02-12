import React from "react";
import {View, Text} from "react-native";
import { StyleSheet } from "react-native";

class Jemput extends React.Component{
    render(){
        return(
            <View style={styles.container} >
                <View style={styles.boxTxt}>
                    <Text style={styles.txt}>Mohon Maaf fitur Jemput</Text>
                    <Text style={styles.txt}>Masih dalam Pengembangan</Text>
                </View>
            </View>
        )
    }
}

export default Jemput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#000",
        padding: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    boxTxt: {
        paddingVertical: 200,
        borderRadius: 20,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#25D366",
    },
    txt: {
        fontSize: 30,
        color: "#FFF",
    }
})