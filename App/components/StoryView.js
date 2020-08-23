//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ProgressBar from '../components/ProgressBar';

// create a component
const StoryView = (props) => {
  return (
    <View style={styles.container}>
      <ProgressBar closeStory={props.closeStory} />
      <Image style={styles.image} source={require('../assets/news.jpg')} />
      <Text style={styles.headline}>Food on the Journey To MARS !</Text>
      <Text style={styles.userResponse}>Great News! You Must Read This </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#19141F',
  },
  image: {
    width: '85%',
    borderRadius: 30,
    marginBottom: 10,
  },
  userResponse: {
    fontSize: 30,
    marginTop: '25%',
    marginLeft: '12%',
    marginRight: '12%',
    color: 'white',
  },

  headline: {
    fontSize: 22,
    marginLeft: '5%',
    marginRight: '5%',
    color: 'white',
  },
});

//make this component available to the app
export default StoryView;
