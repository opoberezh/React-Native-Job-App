import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { checkImageURL } from '../../../../utils';
import styles from './popularjobcard.style';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <Pressable
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}>
      <View style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo) ? item.employer_logo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </View>
      <Text>{item.employer_name}</Text>
    </Pressable>
  );
};

export default PopularJobCard;
