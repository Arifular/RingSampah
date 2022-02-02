import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { styleNSB } from './nsbStyle';


const HomeNsb = () => {
    const [isi, setIsi] = useState({})
    const [book, setBook] = useState([])
    const [token, setToken] = useState('2|SgcBjUFqbQzKcKMkDErt89e2qpRsp6Ni2bhvU6ID')

    useEffect(() => {
        Info()
    }, [])

    const Info = async () => {
        await fetch('https://peaceful-castle-64522.herokuapp.com/api/nasabah/home', {
            method: 'GET',
            headers: {
                Authorization: `Bearer 2|SgcBjUFqbQzKcKMkDErt89e2qpRsp6Ni2bhvU6ID`,
            },
        })
            .then((response) => response.json())
            .then((respon) => {
                console.log('==> Fetcing data...' + respon)
                setIsi(respon.user)
                setBook(respon.buku)
            })
            .catch((err) => console.log('Error fetch data: ' + err))
            .finally(() => {
                console.log('selesai ambil data');
            })
    }

    const Table = () => {
        const item = () => {
            return book.map((value, index) =>
            <ScrollView>
                    <View style={{ flexDirection: 'row', }} key={index}>
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
                            width: 136,
                            alignItems: 'center',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#000' }}>{value.jenis_sampah}</Text>
                        </View>
                        <View style={{
                            width: 136,
                            alignItems: 'flex-start',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#000' }}>Rp. {value.debit}</Text>
                        </View>
                        <View style={{
                            width: 136,
                            alignItems: 'flex-start',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#000' }}>Rp. {value.kredit}</Text>
                        </View>
                        <View style={{
                            width: 136,
                            alignItems: 'flex-start',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#000' }}>Rp. {value.saldo}</Text>
                        </View>
                    </View>
                </ScrollView>
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
                            paddingHorizontal: 15,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>NO</Text>
                        </View>
                        <View style={{
                            paddingHorizontal: 32.5,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Date</Text>
                        </View>
                        <View style={{
                            paddingHorizontal: 10.5,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Keterangan</Text>
                        </View>
                        <View style={{
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Berat (Kg)</Text>
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
                            paddingHorizontal: 46,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Debit</Text>
                        </View>
                        <View style={{
                            paddingHorizontal: 43.5,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Kredit</Text>
                        </View>
                        <View style={{
                            paddingHorizontal: 44,
                            paddingVertical: 5,
                            backgroundColor: '#40407A',
                            borderWidth: 1,
                        }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Saldo</Text>
                        </View>
                    </View>
                    <FlatList
                        data={book}
                        renderItem={item}
                        keyExtractor={(item, index) => index.toString()} />
                </View>
            </ScrollView>
        )
    }

    return (
        <View style={styleNSB.container}>
            <Image source={require('./assets/logo.png')} style={styleNSB.img} />
            <View style={styleNSB.bcc}>
                <View style={styleNSB.pp}>
                    <Image source={require('./assets/man.png')} style={styleNSB.imgPP} />
                </View>
                <View style={styleNSB.boxText}>
                    <Text style={styleNSB.txt1}>{isi.name}</Text>
                    <Text style={styleNSB.txt2}>{isi.email}</Text>
                    <Text style={styleNSB.txt2}>{isi.hp}</Text>
                </View>
            </View>
            <View style={styleNSB.viewLine}>
                <Text style={styleNSB.txt3}>Buku Tabungan</Text>
            </View>
            <Table />
        </View>
    )
}

export default HomeNsb;