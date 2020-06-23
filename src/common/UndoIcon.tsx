import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import normalize from 'react-native-normalize';

const deleteIcon = require('@assets/Icons/undo.png');

const UndoIcon = ({ onUndo }: { onUndo: Function }) => {
  const onHandleUndo = () => {
    onUndo();
  };
  return (
    <TouchableOpacity onPress={onHandleUndo} style={styles.container}>
      <Image source={deleteIcon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default UndoIcon;

const styles = StyleSheet.create({
  container: {
    padding: normalize(5),
  },
  icon: {
    width: normalize(20),
    height: normalize(20),
  },
});
