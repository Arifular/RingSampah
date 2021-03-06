import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styleNSB } from './nsbStyle';
import AsyncStorage from "@react-native-async-storage/async-storage"

class Nsb extends React.Component {
    constructor() {
        super();
        this.state = {
            biodata: {},
            book: [],
            saldo: [],
            token: '',
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('token')
            .then(value => {
                this.setState({ token: value })
                console.log(value);
            })
            .then(() => this.Info())
            .catch(err => {
                console.log('AsyncStrogae ERROR: ' + err);
            })
            .finally(console.log('==> Get Token Done'))
    }

    Info = async () => {
        await fetch('https://peaceful-castle-64522.herokuapp.com/api/nasabah/home', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.state.token}`,
                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((respon) => {
                console.log('==> Fetcing data...' + JSON.stringify(respon))
                this.setState({
                    biodata: respon.user,
                    book: respon.buku,
                    saldo: respon.saldo[0],
                })
                console.log("ini dari biodata" + this.state.biodata)
                console.log("untuk tampilkan gambar" + this.state.biodata.profile)
                console.log("ini dari book" + this.state.book)
            })
            .catch((err) => console.log('Error fetch data: ' + err))
            .finally(() => {
                console.log('selesai ambil data');
            })
    }

render() {
    const Table = () => {
        const Item = () => {
            return (
            
                <View>
                    <ScrollView >
                        {this.state.book.map((value, index) => (
                            <View style={{ flexDirection: 'row', }}>
                                {/* <View style={{
                                    width: 57.5,
                                    alignItems: 'center',
                                    borderWidth: 1,
                                }}>
                                    <Text style={{ fontSize: 18, color: '#000' }}>{value.id}</Text>
                                </View> */}
                                <View style={{
                                    width: 104,
                                    alignItems: 'center',
                                    borderWidth: 1,
                                }}>
                                    <Text style={{ fontSize: 18, color: '#000' }}>{value.created_at}</Text>
                                </View>
                                <View style={{
                                    width: 113.5,
                                    borderWidth: 1,
                                    alignItems: 'center'
                                }}>
                                    <Text style={{ fontSize: 18, color: '#000', }}>{value.keterangan}</Text>
                                </View>
                                <View style={{
                                    width: 101,
                                    alignItems: 'center',
                                    borderWidth: 1,
                                }}>
                                    <Text style={{ fontSize: 18, color: '#000' }}>{value.berat}</Text>
                                </View>
                                <View style={{
                                    width: 120,
                                    alignItems: 'center',
                                    borderWidth: 1,
                                }}>
                                    <Text style={{ fontSize: 18, color: '#000' }}>{value.jenis_sampah}</Text>
                                </View>
                                <View style={{
                                    width: 135,
                                    alignItems: 'flex-start',
                                    borderWidth: 1,
                                }}>
                                    <Text style={{ fontSize: 18, color: '#000' }}>Rp. {value.debit}</Text>
                                </View>
                                <View style={{
                                    width: 135,
                                    alignItems: 'flex-start',
                                    borderWidth: 1,
                                }}>
                                    <Text style={{ fontSize: 18, color: '#000' }}>Rp. {value.kredit}</Text>
                                </View>
                                <View style={{
                                    width: 135,
                                    alignItems: 'flex-start',
                                    borderWidth: 1,
                                }}>
                                    <Text style={{ fontSize: 18, color: '#000' }}>Rp. {value.saldo}</Text>
                                </View>
                            </View>

                        ))}

                        
                    </ScrollView>
                </View>
            )

        }

        return (
            <ScrollView horizontal>
                <View style={{
                    flex: 1,
                    marginTop: 15,
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{
                            width: 104,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1,
                            alignItems: "center",
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Date</Text>
                        </View>
                        <View style={{
                            // paddingHorizontal: 10.5,
                            width: 113.5,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1,
                            alignItems: "center",
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Keterangan</Text>
                        </View>
                        <View style={{
                            // paddingHorizontal: 10,
                            width: 101,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1,
                            alignItems: "center",
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Berat (Kg)</Text>
                        </View>
                        <View style={{
                            width: 120,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1,
                            alignItems: "center",
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Jenis Sampah</Text>
                        </View>
                        <View style={{
                            width: 135,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1,
                            alignItems: "center",
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Debit</Text>
                        </View>
                        <View style={{
                            width: 135,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1,
                            alignItems: "center",
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Kredit</Text>
                        </View>
                        <View style={{
                            width: 135,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1,
                            alignItems: "center",
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Saldo</Text>
                        </View>
                    </View>
                    <Item />
                </View>
            </ScrollView>
        )
    }
    return (
        <View style={styleNSB.container}>
            <Image source={require('./assets/logo.png')} style={styleNSB.img} />
            <View style={styleNSB.bcc}>
                <Image source={require('../../Profile/asset/pp.jpg')} style={styleNSB.pp} />
                <View style={styleNSB.boxText}>
                    <Text style={styleNSB.txt1}>{this.state.biodata.name}</Text>
                    <Text style={styleNSB.txt2}>{this.state.biodata.email}</Text>
                    <Text style={styleNSB.txt2}>{this.state.biodata.hp}</Text>
                    <Text style={styleNSB.txt2}>Saldo : Rp. {this.state.saldo.saldo} </Text>
                </View>
            </View>
            <View style={styleNSB.viewLine}>
                <Text style={styleNSB.txt3}>Buku Tabungan</Text>
            </View>
            {this.state.book === "belum ada catatan dalam buku tabungan" ? <Kosong /> : <Table/>}
            {/* <Table /> */}
        </View>
    )
}
}

export default Nsb;

class Kosong extends React.Component{
    render(){
        return(
            <View style={{
                padding: 20,
                backgroundColor: "#344356",
              }}>
                <Text style={{
                  fontSize: 20,
                  color: "#FFF",
                  fontWeight: "bold",
                  textAlign: "center",
                }}>Belum ada Transaksi</Text>
              </View>
        )
    }
}