import React from "react";
import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import { StyleBook } from "./styleBook";
import Ionicons from "react-native-vector-icons/Ionicons"

class Book extends React.Component{
    render(){
        return(
            <ScrollView>
                <View style={StyleBook.container}>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name="arrow-back-circle-outline" size={50} color={"#000"} />
                        </TouchableOpacity>
                        <Text style={StyleBook.txt}>Buku Panduan</Text>
                        <View />
                    </View>
                    <Text style={StyleBook.sub}>A. Perubahan Data User</Text>
                    <View style={StyleBook.boxTxt}>
                        <Text style={StyleBook.txtList}>1. Perubahan data pribadi bisa langsung ke menu Profile</Text>
                        <Text style={StyleBook.txtList}>2. Perubahan Password di Profile kemudian Nasabah bisa langsung rubah password-nya</Text>
                    </View>
                    <Text style={StyleBook.sub}>B. Terkait Jual Sampah</Text>
                    <View style={StyleBook.boxTxt}>
                        <Text style={StyleBook.txtList}>Untuk Jual sampah ada 2 Opsi :</Text>
                        <Text style={StyleBook.txtList}>1. Nasabah bisa langsung ke lokasi Bank Sampah yang sudah di tetapkan</Text>
                        <Text style={StyleBook.txtList}>2. Nasabah bisa hubungi staff bank sampah, yang nantinya staff sampah yang akan jemput sampahnya</Text>
                        <Text style={StyleBook.txtList}>note: untuk saat ini beberapa fitur masih dalam pengembangan seperti fitur Jemput Sampah, Fitur Chat</Text>
                    </View>
                    <Text style={StyleBook.sub}>C. Terkait Uang Hasil Penjualan Sampah</Text>
                    <View style={StyleBook.boxTxt}>
                        <Text style={StyleBook.txtList}>1. Sampah Nasabah yang sudah di Timbang oleh staff akan terekap di system Buku Tabungan</Text>
                        <Text style={StyleBook.txtList}>2. di Home Buku Tabungan akan ditampilkan, Buku Tabungan berisi tentang informasi seperti : </Text>
                        <View style={StyleBook.list}>
                            <Text style={StyleBook.txtList}>- Sampah yang terjual, jenisnya, beratnya, dan harganya (uang yang masuk ke rekening)</Text>
                            <Text style={StyleBook.txtList}>- Histori Penarikan Uang (uang yang keluar dari rekening)</Text>
                        </View>
                    </View>
                    <Text style={StyleBook.sub}>D. Terkait Penarikan Uang</Text>
                    <View style={StyleBook.boxTxt}>
                        <Text style={StyleBook.txtList}>- Untuk Penarikan uang, Nasabah langsung ke Bank Sampah yang sudah ditetapkan</Text>
                    </View>
                    <Text style={StyleBook.sub}>Customer Support : </Text>
                    <View style={StyleBook.boxTxt}>
                        <Text style={StyleBook.txtList}>WhatsApp : 081200000001</Text>
                        <Text style={StyleBook.txtList}>email: admin@ringsampah.com</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default Book;