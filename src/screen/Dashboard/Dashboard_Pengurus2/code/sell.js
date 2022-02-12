import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { StyleSell } from "../style/sellStyle";
import AsyncStorage from "@react-native-async-storage/async-storage"

class Sell extends React.Component {
    constructor(){
        super();
        this.state = {
            token: "",
            id: "",
            total: "",
            refreshing: false,
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('token')
            .then(value => {
                this.setState({token: value})
            })
            .then(() => this.dataJual())
            .catch((err) => console.log("AsyncStorage ERROR" + err))
            .finally(console.log("Get Token Done"))
    }

    dataJual = () => {
        fetch('http://peaceful-castle-64522.herokuapp.com/api/p2/sell', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.state.token}`
            }
        })
            .then((response) => response.json())
            .then((respone) => {
                console.log("==> Respon data Jual" + respone)
                this.setState({
                    id: respone.category_id,
                    total: respone.quantity,
                })
                console.log(this.state.id)
                console.log(this.state.total)
            })
            .catch((err) => console.log("==> error data Jual : " + JSON.parse(err)))
            .finally(console.log("==> Sampah berhasil dijual"))
    }

    render() {
        return (
            <ScrollView>
                <View style={StyleSell.container}>
                    <Image source={require('../../dashboardNasabah/assets/logo.png')} style={StyleSell.img} />
                    <View style={StyleSell.boxIcon}>
                        <View style={StyleSell.boxBesi}>
                            <Image source={require('../assets/iron-bar.png')} style={StyleSell.icon} />
                        </View>
                        <View style={StyleSell.boxKertas}>
                            <Image source={require('../assets/paperboard.png')} style={StyleSell.icon} />
                        </View>
                        <View style={StyleSell.boxKaca}>
                            <Image source={require('../assets/glasses.png')} style={StyleSell.icon} />
                        </View>
                        <View style={StyleSell.boxPlastic}>
                            <Image source={require('../assets/plastic.png')} style={StyleSell.icon} />
                        </View>
                    </View>
                    <View style={StyleSell.boxCategori}>
                        <Text style={StyleSell.txt}>Note Categori ID :</Text>
                        <View style={StyleSell.boxtxt}>
                            <View style={{ marginRight: 20, marginBottom: 20 }}>
                                <Text style={StyleSell.txt}>- Besi = 1</Text>
                                <Text style={StyleSell.txt}>- Plastik = 2</Text>
                            </View>
                            <View>
                                <Text style={StyleSell.txt}>- Kertas = 3</Text>
                                <Text style={StyleSell.txt}>- Kaca = 4</Text>
                            </View>
                        </View>
                        <Text style={StyleSell.txt}>Categori ID</Text>
                        <View style={StyleSell.input}>
                            <TextInput
                                placeholder="input ID"
                                placeholderTextColor="#FFF"
                                textAlign="center"
                                style={StyleSell.txtInput}
                                onChangeText={id => this.setState({id})} />
                        </View>
                        <Text style={StyleSell.txt}>Jumlah Sampah (Kg)</Text>
                        <View style={StyleSell.input}>
                            <TextInput
                                placeholder="quantity"
                                placeholderTextColor="#FFF"
                                textAlign="center"
                                style={StyleSell.txtInput}
                                onChangeText={total => this.setState({total})} />
                        </View>
                    </View>
                    <TouchableOpacity style={StyleSell.btnJual} onPress={() => this.dataJual()}>
                        <Text style={StyleSell.txtBtn}>Jual</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

export default Sell;