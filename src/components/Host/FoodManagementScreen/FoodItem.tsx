/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Spinner } from 'native-base';

const FoodItem = ({
  url,
  foodName,
  description,
  price,
}: {
  url: string;
  foodName: string;
  description: string;
  price: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Spinner />
      ) : (
          <View style={{ width: 100, height: 100 }}>
            <Image
              source={{ uri: url }}
              resizeMode="cover"
              onLoadStart={() => setIsLoading(true)}
              onLoadEnd={() => setIsLoading(false)}
            />
          </View>
        )}

      <Text>{foodName}</Text>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 0,
    height: 0,
  },
});
