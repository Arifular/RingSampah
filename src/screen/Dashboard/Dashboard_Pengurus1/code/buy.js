import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { StylesBuy } from "../style/buyStyle";

//import Library
import AsyncStorage from "@react-native-async-storage/async-storage"
import Ionicons from "react-native-vector-icons/Ionicons"


class Buy extends React.Component {
    constructor(){
        super();
        this.state = {
            token: "",
            category_id: "",
            quantity: "",
            email: "",
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('token')
            .then(value => {
                this.setState({token: value})
            })
            .then(() => this.dataBeli())
            .catch((err) => console.log("AsyncStorage ERROR" + err))
            .finally(console.log("Ambil token selesai"))
    }

    dataBeli = () => {

        const data = {
            category_id: this.state.category_id,
            quantity: this.state.quantity,
            email: this.state.email,
        }

        fetch('https://peaceful-castle-64522.herokuapp.com/api/driver/buy', {
            method: 'POST',
            body: JSON.stringify(data),
            redirect: 'follow',
            headers: {
                Authorization: `Bearer ${this.state.token}`,
                'Content-Type' : 'application/json',
            }
        })
            .then((response) => response.json())
            .then((respone) => {
                console.log("==> Respon data Jual" + respone)
            })
            .catch((err) => console.log("==> error data Beli : " + JSON.parse(err)))
            .finally(console.log("==> Sampah berhasil di Beli"))
    }

    render() {
        return (
            <ScrollView>
                <View style={StylesBuy.container}>
                    <TouchableOpacity onPress={() => this.props.navigation.replace("BottomP1")}>
                        <Ionicons name="arrow-back-circle-outline" size={50} color={"#000"} />
                    </TouchableOpacity>
                    <View style={StylesBuy.boxIcon}>
                        <View style={StylesBuy.boxBesi}>
                            <Image source={require('../../Dashboard_Pengurus2/assets/iron-bar.png')} style={StylesBuy.icon} />
                        </View>
                        <View style={StylesBuy.boxKertas}>
                            <Image source={require('../../Dashboard_Pengurus2/assets/paperboard.png')} style={StylesBuy.icon} />
                        </View>
                        <View style={StylesBuy.boxKaca}>
                            <Image source={require('../../Dashboard_Pengurus2/assets/glasses.png')} style={StylesBuy.icon} />
                        </View>
                        <View style={StylesBuy.boxPlastic}>
                            <Image source={require('../../Dashboard_Pengurus2/assets/plastic.png')} style={StylesBuy.icon} />
                        </View>
                    </View>
                    <View style={StylesBuy.boxCategori}>
                        <Text style={StylesBuy.txt}>Note Categori ID :</Text>
                        <View style={StylesBuy.boxtxt}>
                            <View style={{ marginRight: 20, marginBottom: 20 }}>
                                <Text style={StylesBuy.txt}>- Besi = 1</Text>
                                <Text style={StylesBuy.txt}>- Plastik = 2</Text>
                            </View>
                            <View>
                                <Text style={StylesBuy.txt}>- Kertas = 3</Text>
                                <Text style={StylesBuy.txt}>- Kaca = 4</Text>
                            </View>
                        </View>
                        <Text style={StylesBuy.txt}>Categori ID</Text>
                        <View style={StylesBuy.input}>
                            <TextInput
                                placeholder="input ID"
                                placeholderTextColor="#FFF"
                                textAlign="center"
                                style={StylesBuy.txtInput}
                                onChangeText={category_id => this.setState({category_id})} />
                        </View>
                        <Text style={StylesBuy.txt}>Jumlah Sampah (Kg)</Text>
                        <View style={StylesBuy.input}>
                            <TextInput
                                placeholder="quantity"
                                placeholderTextColor="#FFF"
                                textAlign="center"
                                style={StylesBuy.txtInput}
                                onChangeText={quantity => this.setState({quantity})} />
                        </View>
                        <Text style={StylesBuy.txt}>Input Email Nasabah</Text>
                        <View style={StylesBuy.input}>
                            <TextInput
                                placeholder="email"
                                placeholderTextColor="#FFF"
                                textAlign="center"
                                style={StylesBuy.txtInput}
                                onChangeText={email => this.setState({email})} />
                        </View>
                    </View>
                    <TouchableOpacity style={StylesBuy.btnJual} onPress={() => this.dataBeli()}>
                        <Text style={StylesBuy.txtBtn}>Beli</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

export default Buy;