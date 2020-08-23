//import liraries
import React from 'react';
import {View} from 'react-native';

import Svg, {ClipPath, Defs, Polygon, Image} from 'react-native-svg';
// create a component
const Decagon = (props) => {
  return (
    <View>
      <Svg height="200" width="200" viewBox="0 0 200 200">
        <Defs>
          <ClipPath id="decagon">
            <Polygon points="128,14 72,14 27,47 10,100 27,153 72,186 128,186 173,153 190,100 173,47" />
          </ClipPath>
        </Defs>
        <Polygon
          points="129,10 71,10 23,44 5,100 23,156 71,190 129,190 177,156 195,100 177,44 "
          stroke={props.color}
          strokeWidth="4"
        />
        <Image
          x="-25"
          y="-25"
          width="250"
          height="250"
          preserveAspectRatio="xMidYMid slice"
          href={{
            uri: props.imageData,
          }}
          clipPath="#decagon"
        />
      </Svg>
    </View>
  );
};

export default Decagon;
