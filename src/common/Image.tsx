import React from 'react';
import { View } from 'react-native';
import Image from 'react-native-image-progress';
import ProgressCircleSnail from 'react-native-progress/CircleSnail';
import normalize from 'react-native-normalize';
import color from '@constants/Color';

const CustomImage = ({
  url,
  backgroundColor = '#e3e3e3',
  style = {
    width: normalize(100),
    height: normalize(100),
    borderRadius: 0,
  },
}: {
  url: string;
  backgroundColor?: string;
  style?: {
    width: number;
    height: number;
    borderRadius?: number;
  };
}) => {
  const imageContainerStyle = {
    backgroundColor: backgroundColor,
    ...style,
  };
  const imageStyle = {
    ...style,
  };
  const progressStyle = {
    size: normalize(style.width / 2),
    borderWidth: 0,
    color: color.MAIN_COLOR,
    unfilledColor: 'rgba(200, 200, 200, 0.2)',
  };
  return (
    <View>
      <Image
        // source={{ uri: url }}
        indicator={ProgressCircleSnail}
        indicatorProps={progressStyle}
        style={imageContainerStyle}
        imageStyle={imageStyle}
      />
    </View>
  );
};

export default CustomImage;
