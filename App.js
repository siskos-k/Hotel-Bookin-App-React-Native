import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import HotelDetails from './HotelDetails'; // Import the HotelDetails component
import { useNavigation } from '@react-navigation/native';

// Utility function to generate random hotel data
const generateRandomHotel = () => ({
  id: Math.random().toString(),
  name: `Hotel ${Math.floor(Math.random() * 1000)}`,
  location: ['Miami', 'Paris', 'New York', 'London'][Math.floor(Math.random() * 4)],
  image: `https://picsum.photos/200/150?random=${Math.random()}`, // Placeholder image
  price: `$${Math.floor(Math.random() * 100 + 50)}`,
});

const trendingHotels = Array.from({ length: 3 }).map(generateRandomHotel);
const suggestedHotels = Array.from({ length: 3 }).map(generateRandomHotel);

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to TravelNest</Text> 
      <SearchBar
        placeholder="Where to?"
        onChangeText={setSearchQuery}
        value={searchQuery}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInput}
      />
      <Text style={styles.sectionTitle}>Trending Hotels</Text>
      <FlatList
            horizontal
            data={trendingHotels}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('HotelDetails', { hotel: item })}>
                    <HotelCard hotel={item} style={styles.hotelCard} />
                </TouchableOpacity>
            )}
    keyExtractor={(item) => item.id}
    style={styles.list}
/>
      <Text style={styles.sectionTitle}>Suggested for You</Text>
      <FlatList
        horizontal
        data={suggestedHotels}
        renderItem={({ item }) => (
          <HotelCard hotel={item} style={styles.hotelCard} />
        )}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const HotelCard = ({ hotel }) => (
  <View style={styles.hotelCard}>
    <Image source={{ uri: hotel.image }} style={styles.hotelImage} />
    <Text style={styles.hotelName}>{hotel.name}</Text>
    <Text style={styles.hotelLocation}>{hotel.location}</Text>
    <Text style={styles.hotelPrice}>{hotel.price} per night</Text>
  </View>
);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="HotelDetails" component={HotelDetails} />  // Add the details screen */}
        <Stack.Screen name="HotelDetails" component={HotelDetails} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // White background
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3366CC', // Blue color
    marginBottom: 20,
  },
  searchContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',  // Ensure white background
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent', 
  },
  searchInput: {
    backgroundColor: '#f0f0f0', // Light searchbar color
  },
  inputContainer: {
    backgroundColor: '#f0f0f0', // Light searchbar background
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  list: {
    marginBottom: 20,
  },
  hotelCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // Shadow effect
    padding: 10,
    marginRight: 10,
    width: 200,
  },
  hotelImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover', // Cover the whole card
  },
  hotelName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  hotelLocation: {
    color: '#666',
    marginBottom: 5,
  },
  hotelPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3366CC', // Blue price
    marginBottom: 0, // Remove default margin
  },
  priceText: {
      fontSize: 12, 
  }
});
export default App;