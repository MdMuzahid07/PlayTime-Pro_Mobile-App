import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../../components/ui/SearchBar';

const Store = () => {
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
            <Text>Store</Text>
        </View>
    )
}

export default Store;