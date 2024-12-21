import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

interface SearchBarProps {
    search: string;
    setSearch: (text: string) => void;
    handleClick: () => void;
}

const SearchBar = ({ search, setSearch, handleClick }: SearchBarProps) => {

    return (
        <View
            style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
                padding: 15,
            }}
        >
            <TextInput
                placeholder="Which sport are you looking for?"
                placeholderTextColor="gray"
                value={search}
                onChangeText={setSearch}
                style={{
                    height: 45,
                    borderColor: '#121212',
                    color: '#000',
                    borderWidth: 2,
                    borderRadius: 30,
                    paddingLeft: 15,
                    flex: 1, // Takes up available space
                    paddingRight: 40, // Creates space for the search icon
                }}
            />
            <TouchableOpacity
                onPress={handleClick}
                style={{
                    position: 'absolute',
                    right: 25,
                    padding: 5, // Adds space around the icon for better tap area
                }}
            >
                <Feather name="search" size={24} color="#F85E59" />
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar