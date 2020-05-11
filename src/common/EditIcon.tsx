import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import normalize from 'react-native-normalize';

const editIcon = require('@assets/Icons/edit.png');

const EditIcon = ({ onEdit }: { onEdit: Function }) => {
  const onHandleEdit = () => {
    onEdit();
  };
  return (
    <TouchableOpacity onPress={onHandleEdit} style={styles.container}>
      <Image source={editIcon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default EditIcon;

const styles = StyleSheet.create({
  container: {
    padding: normalize(5),
  },
  icon: {
    width: normalize(20),
    height: normalize(20),
  },
});
