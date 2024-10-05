import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// Ensure that both route and navigation are passed as props
const MenuScreen = ({ route, navigation }) => {
  const { menu } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Chef's Menu</Text>
      <Text>Total Menu Items: {menu.length}</Text>

      <FlatList
        data={menu}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10, borderBottomWidth: 1, paddingBottom: 10 }}>
            <Text>Dish: {item.dishName}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Course: {item.course}</Text>
            <Text>Price: R{item.price}</Text>
          </View>
        )}
      />

      {/* Back Button to navigate to the previous screen */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()} 
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFAE0',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  menuItem: {
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  priceText: {
    fontSize: 16,
    color: '#FEFAE0',  // Green color for price
    fontWeight: 'bold',
  },

  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FF6347',
    borderRadius: 5,
  },

  buttonText: {
    color: '#181C14',
    fontSize: 18,
  },
});

export default MenuScreen;
