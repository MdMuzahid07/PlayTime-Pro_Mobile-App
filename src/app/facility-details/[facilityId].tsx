import { Text, ScrollView, View, Dimensions, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');


const facility = {
    _id: "676072ad97f1b9dfd45ee9fe",
    name: "Premium Football Field",
    description: "<p><strong>Premium Football Field Product Description:</strong></p><p>Step onto the field and experience the thrill of a well-maintained football pitch, designed for casual and competitive matches. This premium football field offers a lush grass surface, perfect for optimal ball control and movement. The field provides ample space for large teams, with clear boundary lines and regulation-size goalposts, ensuring a professional atmosphere.</p><p><strong>Features:</strong></p><ul><li><strong>Top-Quality Grass Surface</strong>: Lush and well-maintained for smooth gameplay.</li><li><strong>Regulation-Size Goalposts</strong>: Conforming to professional standards for competitive matches.</li><li><strong>Ample Playing Space</strong>: Spacious field ideal for team play and practice sessions.</li><li><strong>Weather-Resistant Maintenance</strong>: Designed to maintain quality in various weather conditions.</li><li><strong>Spectator Seating</strong>: Comfortable seating arrangements for fans and supporters.</li></ul><p><br></p>",
    pricePerHour: 100,
    location: "Central Park, New York",
    image: [
        "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734374058/t5jjo0k670kcb72ygnog.png",
        "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734374059/hkwbj3accovpyxrpewlo.png",
        "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734374060/dfpizkab9ds5do5rm53n.png",
        "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734374059/fpyfybxgsqgn9itypimd.jpg"
    ],
    isDeleted: false
}


const FacilityDetails = () => {
    const { width } = useWindowDimensions();
    useLocalSearchParams<{ facilityId: string }>();



    return (
        <ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#121212" },
                    headerShadowVisible: false,
                    // headerLeft: () => (
                    //     <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    // ),
                    // headerRight: () => (
                    //     <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    // ),
                    headerTitle: "Facility Details",
                    headerTintColor: "#fff",
                }}
            />


            <View>
                <Carousel
                    loop
                    width={width}
                    height={width * 0.6} // Adjust the aspect ratio of the slider
                    autoPlay
                    autoPlayInterval={2000} // 3 seconds
                    data={facility?.image}
                    scrollAnimationDuration={1000}
                    renderItem={({ item }) => (
                        <View >
                            <Image source={{ uri: item }} style={styles.image} />
                        </View>
                    )}
                />
            </View>


            <Text style={{ flex: 1, padding: 15 }}>
                <RenderHtml
                    contentWidth={width}
                    source={{ html: facility.description }}
                />
            </Text>
        </ScrollView>
    )
}

export default FacilityDetails;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    card: {
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});