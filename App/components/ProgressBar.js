//import liraries
import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

// create a component
const ProgressBar = (props) => {
  let progressWidth = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progressWidth.current, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, [progressWidth]);
  useEffect(() => {
    const timer = setTimeout(() => {
      props.closeStory(false);
    }, 5000);
    return () => clearTimeout(timer);
  });

  const width = progressWidth.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.inner, width}} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: '1%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    marginBottom: '15%',
    marginTop: '10%',
  },
  inner: {
    height: '110%',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default ProgressBar;
