import React from "react";
import { FlatList, StyleSheet } from "react-native";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import ActivityIndicator from "../components/ActivityIndicator";
import Card from "../components/Card";
import colors from "../config/colors";
import Button from "../components/AppButton";
import AppText from "../components/AppText";
import { useState } from "react";
import { useEffect } from "react";


function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect (()=>{
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if(!response.ok) return setError(true);
    
    setError(false);
    setListings(response.data);
  }
  return (
    <Screen style={styles.screen}>
      {error && (<>
      <AppText>Could not load the listings</AppText>
      <Button title={Retry} onPress={loadListings}/>
      </>)}
      <ActivityIndicator visible={true}/>
      {/* <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={()=> {navigation.navigate("ListingDetails", item)}}
          />
        )}
      /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
