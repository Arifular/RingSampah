import React from "react";
import { View, Text, Image, ScrollView, FlatList } from "react-native"
import { StyleDashP2 } from "../style/styleDash2";
import AsyncStorage from "@react-native-async-storage/async-storage"

class DashboardP2 extends React.Component {
    constructor() {
        super();
        this.state = {
            total: [],
            total2: [],
            total3: [],
            total4: [],
            biodata: {},
            log: [],
            token: "",
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('token')
            .then(value => {
                this.setState({ token: value })
                console.log(value)
            })
            .then(() => this.Info())
            .catch(err => {
                console.log('AsyncStrogae ERROR: ' + err)
            })
            .finally(console.log('==> Get Token Done'))
    }

    Info = async () => {
        await fetch('http://peaceful-castle-64522.herokuapp.com/api/p2/home', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.state.token}`,
                Accept: 'application/json'
            }
        })
            .then((response) => response.json())
            .then((respon) => {
                console.log('==> Fetcing data...' + JSON.stringify(respon))
                this.setState({
                    biodata: respon.user,
                    log: respon.data,
                    total: respon.stock[0],
                    total2: respon.stock[1],
                    total3: respon.stock[2],
                    total4: respon.stock[3],
                })
                console.log("ini dari user" + JSON.stringify(this.state.biodata))
                console.log("ini dari data" + JSON.stringify(this.state.log))
                console.log("ini dari total" + JSON.stringify(this.state.total))
                console.log("ini dari total2" + JSON.stringify(this.state.total2))
                console.log("ini dari total3" + JSON.stringify(this.state.total3))
                console.log("ini dari total4" + JSON.stringify(this.state.total4))
            })
            .catch((err) => console.log("error get data" + err))
            .finally(console.log("selesai ambil data"))
    }

    Table = () => {
        const item = ({ item }) => {
            return this.state.log.map((value, index) =>
                <ScrollView>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{
                            width: 57.5,
                            alignItems: 'center',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#000' }}>{value.id}</Text>
                        </View>
                        <View style={{
                            width: 104,
                            alignItems: 'center',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#000' }}>{value.updated_at}</Text>
                        </View>
                        <View style={{
                            width: 136,
                            borderWidth: 1,
                            alignItems: 'center'
                        }}>
                            <Text style={{ fontSize: 18, color: '#000', }}>{value.category}</Text>
                        </View>
                        <View style={{
                            width: 100,
                            alignItems: 'center',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#000' }}>{value.quantity}</Text>
                        </View>
                        <View style={{
                            width: 109,
                            alignItems: 'flex-start',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#000' }}>Rp. {value.sell_price}</Text>
                        </View>
                        <View style={{
                            width: 136,
                            alignItems: 'flex-start',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#000' }}>Rp. {value.total_price}</Text>
                        </View>
                    </View>
                </ScrollView>
            )
        }

        return (
            <ScrollView horizontal>
                <View style={{
                    flex: 1,
                    marginTop: 5,
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{
                            paddingHorizontal: 15,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>NO</Text>
                        </View>
                        <View style={{
                            paddingHorizontal: 33,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Date</Text>
                        </View>
                        <View style={{
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Jenis Sampah</Text>
                        </View>
                        <View style={{
                            paddingHorizontal: 11.5,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Berat(Kg)</Text>
                        </View>
                        <View style={{
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Harga Jual</Text>
                        </View>
                        <View style={{
                            paddingHorizontal: 47,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Total</Text>
                        </View>
                    </View>
                    <FlatList
                        data={this.state.log}
                        renderItem={item}
                        keyExtractor={(item, index) => index.toString()} />
                </View>
            </ScrollView>
        )
    }

    render() {
        return (
            <View style={StyleDashP2.container}>
                <Image source={require('../../dashboardNasabah/assets/logo.png')} style={StyleDashP2.img} />
                <View style={StyleDashP2.bcc}>
                    <Image source={require('../assets/man.png')} style={StyleDashP2.pp} />
                    <View style={StyleDashP2.boxText}>
                        <Text style={StyleDashP2.txt1}>{this.state.biodata.name}</Text>
                        <Text style={StyleDashP2.txt2}>{this.state.biodata.email}</Text>
                        <Text style={StyleDashP2.txt2}>{this.state.biodata.hp}</Text>
                    </View>
                </View>
                <View style={StyleDashP2.viewLine} />
                <ScrollView>
                    <View style={StyleDashP2.boxIcon}>
                        <View style={StyleDashP2.boxBesi}>
                            <Image source={require('../assets/iron-bar.png')} style={StyleDashP2.icon} />
                            <Text style={StyleDashP2.txt1}>Stock : {this.state.total.quantity}</Text>
                        </View>
                        <View style={StyleDashP2.boxKertas}>
                            <Image source={require('../assets/paperboard.png')} style={StyleDashP2.icon} />
                            <Text style={StyleDashP2.txt1}>Stock : {this.state.total3.quantity}</Text>
                        </View>
                        <View style={StyleDashP2.boxKaca}>
                            <Image source={require('../assets/glasses.png')} style={StyleDashP2.icon} />
                            <Text style={StyleDashP2.txt1}>Stock : {this.state.total4.quantity}</Text>
                        </View>
                        <View style={StyleDashP2.boxPlastic}>
                            <Image source={require('../assets/plastic.png')} style={StyleDashP2.icon} />
                            <Text style={StyleDashP2.txt1}>Stock : {this.state.total2.quantity}</Text>
                        </View>
                    </View>
                    <Text style={StyleDashP2.text3}>Histori Penjualan</Text>
                    <this.Table />
                </ScrollView>
            </View>
        )
    }
}

export default DashboardP2;

[
    { "id": 1, "category": "Besi", "buyprice": 8000, "sellprice": 10000, "quantity": 4, "created_at": null, "updated_at": "2022-02-09T02:53:19.000000Z" }, 
    { "id": 2, "category": "Plastik", "buyprice": 4000, "sellprice": 5000, "quantity": 0, "created_at": null, "updated_at": null }, 
    { "id": 3, "category": "Kertas", "buyprice": 1500, "sellprice": 2500, "quantity": 10, "created_at": null, "updated_at": "2022-02-09T03:19:32.000000Z" }, 
    { "id": 4, "category": "Kaca", "buyprice": 800, "sellprice": 1000, "quantity": 0, "created_at": null, "updated_at": null }
]