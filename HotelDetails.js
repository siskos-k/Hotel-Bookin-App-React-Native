import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { Rating } from 'react-native-elements';

const hardcodedRatings = [
  {
    profilePic: 'https://picsum.photos/50/50?random=1', // Replace with actual image URL
    rating: 4,
    comment: 'Great location and friendly staff!',
  },
  {
    profilePic: 'https://picsum.photos/50/50?random=2', // Replace with actual image URL
    comment: 'Clean rooms and comfortable beds.',
    rating: 5,
  },
  // Add more ratings as needed
];

const HotelDetails = ({ route }) => {
  const { hotel } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: hotel.image }} style={styles.image} />
      <Text style={styles.name}>{hotel.name}</Text>
      <Text style={styles.description}>{hotel.description}</Text>
      <View style={styles.priceRating}>
        <Text style={styles.price}>{hotel.price} per night</Text>
        <Rating imageSize={20} readonly startingValue={hotel.rating} />
      </View>
      <Text style={styles.reviewTitle}>User Reviews</Text>
      {hardcodedRatings.map((rating, index) => (
        <View key={index} style={styles.reviewContainer}>
          <Image source={{ uri: rating.profilePic }} style={styles.profilePic} />
          <View style={styles.reviewDetails}>
            <Rating imageSize={15} readonly startingValue={rating.rating} />
            <Text style={styles.comment}>{rating.comment}</Text>
          </View>
        </View>
      ))}
      <Button title="Book Now" onPress={() => alert('Booking in progress!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
  },
  priceRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10, // Rounded corners
    padding: 10,
    shadowColor: '#ccc', // Shadow color
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5, // Shadow blur
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25, // Rounded profile pic
    marginRight: 10,
  },
  reviewDetails: {
    flex: 1, // Allow comment text to expand
  },
  comment: {
    fontSize: 14,
  },
});

export default HotelDetails;