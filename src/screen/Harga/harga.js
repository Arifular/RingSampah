import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"

class Harga extends React.Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="arrow-back-circle-outline" size={50} color={"#000"} />
                    </TouchableOpacity>
                    <Text style={Styles.txt}>Harga Sampah</Text>
                    <View />
                </View>
                <View style={Styles.boxIcon}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={Styles.boxBesi}>
                            <Image source={require('../Dashboard/Dashboard_Pengurus2/assets/iron-bar.png')} style={Styles.icon} />
                            <Text style={Styles.txt1}>Rp.8000/Kg</Text>
                        </View>
                        <View style={Styles.boxKertas}>
                            <Image source={require('../Dashboard/Dashboard_Pengurus2/assets/paperboard.png')} style={Styles.icon} />
                            <Text style={Styles.txt1}>Rp.1500/Kg</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={Styles.boxKaca}>
                            <Image source={require('../Dashboard/Dashboard_Pengurus2/assets/glasses.png')} style={Styles.icon} />
                            <Text style={Styles.txt1}>Rp.800/Kg</Text>
                        </View>
                        <View style={Styles.boxPlastic}>
                            <Image source={require('../Dashboard/Dashboard_Pengurus2/assets/plastic.png')} style={Styles.icon} />
                            <Text style={Styles.txt1}>Rp.4000/Kg</Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.box} />
            </View>
        )
    }
}

export default Harga;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 10,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    txt: {
        fontSize: 30,
        color: "#000",
        textAlign: "center",
    },
    boxIcon: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    boxBesi: {
        paddingHorizontal: 30,
        paddingVertical: 30,
        backgroundColor: "#2C3E50",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    boxKertas: {
        paddingHorizontal: 30,
        paddingVertical: 30,
        backgroundColor: "#F1C40F",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    boxKaca: {
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
        height: 100,
        width: 100,
    },
    txt1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#fff",
    },
    box: {
        padding: 30,
    }
})