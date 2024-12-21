import { View, ScrollView, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import SearchBar from '../components/ui/SearchBar';
import { useState } from 'react';

const Home = () => {
  const [search, setSearch] = useState('');



  const showAlert = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  };
  return (
    <View>
      <SearchBar
        search={search}
        setSearch={setSearch}
        handleClick={showAlert}
      />

      <ScrollView
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
      >

        <View style={{ padding: 15 }}>
          <Image
            source={{ uri: 'https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375218/wmsxggbcp2prikwajhgn.png' }}
            style={{ width: '100%', height: 200, borderRadius: 10 }}
            resizeMode="cover"
          />

          <Image
            source={{ uri: 'https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375218/wmsxggbcp2prikwajhgn.png' }}
            style={{ width: '100%', height: 200, borderRadius: 10 }}
            resizeMode="cover"
          />  <Image
            source={{ uri: 'https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375218/wmsxggbcp2prikwajhgn.png' }}
            style={{ width: '100%', height: 200, borderRadius: 10 }}
            resizeMode="cover"
          />  <Image
            source={{ uri: 'https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375218/wmsxggbcp2prikwajhgn.png' }}
            style={{ width: '100%', height: 200, borderRadius: 10 }}
            resizeMode="cover"
          />  <Image
            source={{ uri: 'https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375218/wmsxggbcp2prikwajhgn.png' }}
            style={{ width: '100%', height: 200, borderRadius: 10 }}
            resizeMode="cover"
          />  <Image
            source={{ uri: 'https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375218/wmsxggbcp2prikwajhgn.png' }}
            style={{ width: '100%', height: 200, borderRadius: 10 }}
            resizeMode="cover"
          />  <Image
            source={{ uri: 'https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375218/wmsxggbcp2prikwajhgn.png' }}
            style={{ width: '100%', height: 200, borderRadius: 10 }}
            resizeMode="cover"
          />  <Image
            source={{ uri: 'https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375218/wmsxggbcp2prikwajhgn.png' }}
            style={{ width: '100%', height: 200, borderRadius: 10 }}
            resizeMode="cover"
          />  <Image
            source={{ uri: 'https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375218/wmsxggbcp2prikwajhgn.png' }}
            style={{ width: '100%', height: 200, borderRadius: 10 }}
            resizeMode="cover"
          />  <Image
            source={{ uri: 'https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375218/wmsxggbcp2prikwajhgn.png' }}
            style={{ width: '100%', height: 200, borderRadius: 10 }}
            resizeMode="cover"
          />
        </View>
      </ScrollView >
    </View>
  )
}

export default Home;

