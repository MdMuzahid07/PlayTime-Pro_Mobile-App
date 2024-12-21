import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useColorScheme } from 'react-native';

const _layout = () => {
    const colorScheme = useColorScheme();



    return (
        <>
            <StatusBar style="light" backgroundColor="#000" translucent={true} />


            {/* tabs navigator  */}

            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "#F85E59",
                    tabBarInactiveTintColor: "#8E8E93",
                    tabBarStyle: {
                        backgroundColor: '#121212', // Tab bar background color
                        borderTopWidth: 0, // Optional: Remove top border
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                    },
                    headerStyle: {
                        backgroundColor: '#121212', // Top title background color
                    },
                    headerTintColor: '#fff', // Top title text color
                }}
            >
                <Tabs.Screen name="index" options={{
                    title: "Sports",
                    tabBarIcon: ({ focused }) => (
                        <Octicons name="home" size={24} color={focused ? '#F85E59' : '#8E8E93'} />
                    )
                }} />
                <Tabs.Screen name="Store" options={{
                    title: "Store",
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5 name="store-alt" size={22} color={focused ? '#F85E59' : '#8E8E93'} />
                    )
                }} />
                <Tabs.Screen name="Profile" options={{
                    title: "Profile",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="person" size={24} color={focused ? '#F85E59' : '#8E8E93'} />
                    )
                }} />
            </Tabs>


        </>
    )
}

export default _layout;