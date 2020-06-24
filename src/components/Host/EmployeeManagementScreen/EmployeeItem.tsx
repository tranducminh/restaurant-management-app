import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CustomImage from '@common/Image';
import normalize from 'react-native-normalize';
import DeleteIcon from '@common/DeleteIcon';
import UndoIcon from '@common/UndoIcon';
import {
  removePendingEmployee,
  disableEmployee,
  enableEmployee,
} from '@api/index';
const checkIcon = require('@assets/Icons/check.png');
const blockIcon = require('@assets/Icons/wrong.png');

export default function EmployeeItem({
  isAuth,
  status,
  employeeID,
  avatar,
  name,
  email,
}: {
  isAuth: boolean;
  status: string;
  employeeID: string;
  avatar: string;
  name: string;
  email: string;
}) {
  const onDelete = () => {
    if (isAuth === false) {
      removePendingEmployee(employeeID);
    } else {
      disableEmployee(employeeID);
    }
  };
  const onUndo = () => {
    enableEmployee(employeeID);
  };
  return (
    <View style={styles.container}>
      <CustomImage url={avatar} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          {isAuth === true && status === 'ENABLED' && (
            <Image source={checkIcon} style={styles.icon} />
          )}
          {status === 'DISABLED' && (
            <Image source={blockIcon} style={styles.icon} />
          )}
        </View>
        <Text style={styles.text}>{email}</Text>
        {isAuth === false && (
          <View style={styles.pending}>
            <Text style={styles.pendingText}>Pending</Text>
          </View>
        )}
      </View>
      {(status === 'ENABLED' || isAuth === false) && (
        <DeleteIcon onDelete={onDelete} />
      )}
      {status === 'DISABLED' && <UndoIcon onUndo={onUndo} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: normalize(20),
    justifyContent: 'space-between',
  },
  image: {
    width: normalize(65),
    height: normalize(65),
    borderRadius: normalize(50),
  },
  content: {
    paddingLeft: normalize(10),
    width: '70%',
  },
  name: {
    fontFamily: 'Exo-Bold',
    fontSize: normalize(15),
    marginBottom: normalize(3),
    marginRight: normalize(10),
  },
  nameContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: normalize(20),
    height: normalize(20),
  },
  text: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(14),
    marginBottom: normalize(4),
  },
  pending: {
    backgroundColor: '#69e781',
    width: normalize(70),
    paddingVertical: normalize(5),
    borderRadius: normalize(8),
  },
  pendingText: {
    color: '#ffffff',
    fontFamily: 'Exo-Bold',
    textAlign: 'center',
  },
});
