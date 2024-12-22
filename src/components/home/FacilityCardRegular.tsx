import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const FacilityCardRegular = ({ facility }: any) => {

    const handlePress = () => {
        Alert.alert('FacilityCard', "joahdfpoadfhsapeosfh");
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.cardContainer}>
            {/* Image as Background */}
            <ImageBackground
                source={{ uri: facility?.image?.[0] }}
                style={styles.imageBackground}
                imageStyle={styles.image}
            >
                {/* Title and Price on top of Image */}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{facility.name}</Text>
                    <Text style={styles.price}>${facility.pricePerHour} / Hour</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default FacilityCardRegular;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#121212',
        borderRadius: 15,
        margin: 15,
        marginRight: 10,
        overflow: 'hidden', // Ensure content doesn't overflow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5, // For Android shadow
        // borderColor: "#121212",
        // borderWidth: 2
    },
    imageBackground: {
        width: "100%",
        height: 250,
        justifyContent: 'flex-end', // Align the text at the bottom of the image
    },
    image: {
        borderRadius: 15,
    },
    textContainer: {
        padding: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background for readability
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F85E59', // Accent color for title
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF', // White for price to make it stand out
    },
});