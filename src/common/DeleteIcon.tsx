import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import normalize from 'react-native-normalize';

const deleteIcon = require('@assets/Icons/delete.png');

const DeleteIcon = ({ onDelete }: { onDelete: Function }) => {
  const onHandleDelete = () => {
    onDelete();
  };
  return (
    <TouchableOpacity onPress={onHandleDelete} style={styles.container}>
      <Image source={deleteIcon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default DeleteIcon;

const styles = StyleSheet.create({
  container: {
    padding: normalize(5),
  },
  icon: {
    width: normalize(20),
    height: normalize(20),
  },
});
