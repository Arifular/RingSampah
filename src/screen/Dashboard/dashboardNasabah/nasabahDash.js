import React from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { styleNSB } from './nsbStyle';

const data = [
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
    { no: 1, date: '2022-12-30', keterangan: 'Mobile', jSampah: 'Plastik', debit: '500.000', kredit: '200.000', saldo: '100.000.000' },
]

class DashboradNSB extends React.Component {
    render() {
        return (
            <View style={styleNSB.container}>
                <Image source={require('./assets/logo.png')} style={styleNSB.img} />
                <View style={styleNSB.bcc}>
                    <View style={styleNSB.pp}>
                        <Image source={require('./assets/man.png')} style={styleNSB.imgPP} />
                    </View>
                    <View style={styleNSB.boxText}>
                        <Text style={styleNSB.txt1}>Nasabah</Text>
                        <Text style={styleNSB.txt2}>nasabah@example.com</Text>
                        <Text style={styleNSB.txt2}>082200000001</Text>
                    </View>
                </View>
                <View style={styleNSB.viewLine}>
                    <Text style={styleNSB.txt3}>Buku Tabungan</Text>
                </View>
                <Table />
            </View>
        )
    }
}

export default DashboradNSB;

const Table = () => {
    const item = ({ item }) => {
        return (
            <ScrollView>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{
                        width: 57.5,
                        alignItems: 'center',
                        borderWidth: 1,
                    }}>
                        <Text style={{ fontSize: 18, color: '#000' }}>{item.no}</Text>
                    </View>
                    <View style={{
                        width: 104,
                        alignItems: 'center',
                        borderWidth: 1,
                    }}>
                        <Text style={{ fontSize: 18, color: '#000' }}>{item.date}</Text>
                    </View>
                    <View style={{
                        width: 173,
                        borderWidth: 1,
                    }}>
                        <Text style={{ fontSize: 18, color: '#000', }}>{item.keterangan}</Text>
                    </View>
                    <View style={{
                        width: 136,
                        alignItems: 'center',
                        borderWidth: 1,
                    }}>
                        <Text style={{ fontSize: 18, color: '#000' }}>{item.jSampah}</Text>
                    </View>
                    <View style={{
                        width: 136,
                        alignItems: 'flex-start',
                        borderWidth: 1,
                    }}>
                        <Text style={{ fontSize: 18, color: '#000' }}>Rp. {item.debit}</Text>
                    </View>
                    <View style={{
                        width: 136,
                        alignItems: 'flex-start',
                        borderWidth: 1,
                    }}>
                        <Text style={{ fontSize: 18, color: '#000' }}>Rp. {item.kredit}</Text>
                    </View>
                    <View style={{
                        width: 136,
                        alignItems: 'flex-start',
                        borderWidth: 1,
                    }}>
                        <Text style={{ fontSize: 18, color: '#000' }}>Rp. {item.saldo}</Text>
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
                        paddingHorizontal: 33,
                        paddingVertical: 5,
                        backgroundColor: '#40407A',
                        borderWidth: 1,
                    }}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>Date</Text>
                    </View>
                    <View style={{
                        paddingHorizontal: 40,
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
                        paddingHorizontal: 43.5,
                        paddingVertical: 5,
                        backgroundColor: '#40407A',
                        borderWidth: 1,
                    }}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>Saldo</Text>
                    </View>
                </View>
                <FlatList
                    data={data}
                    renderItem={item}
                    keyExtractor={(item, index) => index.toString()} />
            </View>
        </ScrollView>
    )
}