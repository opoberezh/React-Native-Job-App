import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constans";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import  useFetch  from "../../../hook/useFatch";

const PopularJobs = () => {
  const router = useRouter();

 
  const {data, isLoading, error} = useFetch("search", {
    query: 'React developer',
    num_pages: 1,
    page: 1,
  })
console.log(data);
  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular jobs</Text>
      <Pressable>
        <Text style={styles.headerBtn}>Show all</Text>
      </Pressable>
     </View>
     {/* loader */}
     <View style={styles.cardsContainer}>
{isLoading ? (
  <ActivityIndicator size="large" colors={COLORS.primary}/>
) : error ? (
  <Text>Something went wrong</Text>
) : (
  <FlatList
  data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
  renderItem={({item}) => (
    <PopularJobCard item={item}/>
  )}
  key={item => item?.job_id}
  contentContainerStyle={{columnGap: SIZES.medium}}
  horizontal
  />
)}
     </View>
    </View>
  );
};

export default PopularJobs;
