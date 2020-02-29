import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import businessess from './sampledata/businessess.js';
import SearchBar from './Components/SearchBar.js';
import Shops from './Components/Shops.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Coffee Finder</Text>
      <SearchBar />
      <Shops />
      {/* <ScrollView>
        {businessess.businesses.map((e, id) => {
          return (
            <ImageBackground
              source={{ uri: `${e.image_url}` }}
              key={id}
              style={styles.image}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  backgroundColor: 'rgba(0,0,0,0,.5)',
                }}>
                <Text
                  style={[styles.inlay, { backgroundColor: 'transparent' }]}
                  key={id}>
                  {e.name}
                </Text>
              </View>
            </ImageBackground>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 50,
  },
  image: {
    width: 300,
    height: 100,
    margin: 10,
  },
  inlay: {
    textAlign: 'center',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
