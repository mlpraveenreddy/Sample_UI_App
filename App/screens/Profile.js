//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

import ImagePicker from 'react-native-image-crop-picker';
import Decagon from '../components/Decagon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import StoryView from '../components/StoryView';
import defaultPic from '../assets/Image.json';
import Footer from '../assets/Footer.svg';

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(defaultPic.imageString);
  const clickPhoto = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 200,
      compressImageMaxHeight: 200,
      cropping: true,
      compressImageQuality: 0.7,
      includeBase64: true,
    })
      .then((image) => {
        var x = image.mime;
        var y = image.data;
        var z = 'data:' + x + ';base64,' + y;
        setImage(z);
      })
      .catch((err) => {
        console.log('openCamera catch' + err.toString());
      });
    setModalVisible(false);
  };

  const pickPhoto = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      compressImageQuality: 0.7,
      includeBase64: true,
    })
      .then((image) => {
        var x = image.mime;
        var y = image.data;
        var z = 'data:' + x + ';base64,' + y;
        setImage(z);
      })
      .catch((err) => {
        console.log('openPicker catch' + err.toString());
      });
    setModalVisible(false);
  };

  const removePhoto = () => {
    setImage(defaultPic.imageString);
    setModalVisible(false);
  };
  const [color, setColor] = useState('none');
  const [micon, setIcon] = useState('plus-circle');
  const [newStory, setNewStory] = useState(false);
  const handleAddStory = () => {
    setColor('yellow');
    setIcon('dots-horizontal');
    setNewStory(true);
  };
  const [isViewed, setIsViewed] = useState(false);
  const [storyModal, setStoryModal] = useState(false);
  const handleViewStory = () => {
    if (newStory === true && isViewed === true) {
      setStoryModal(true);
      setColor('grey');
      setIsViewed(true);
    } else if (newStory === true) {
      setStoryModal(true);
      setIsViewed(true);
      setColor('grey');
    } else {
      console.log('story not added');
    }
  };
  const handleCloseStory = (data) => {
    setStoryModal(data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="chevron-left" color="yellow" size={40} />
        <Icon name="menu" color="yellow" size={40} />
      </View>
      <View style={styles.picposition}>
        <TouchableOpacity
          onLongPress={() => setModalVisible(true)}
          onPress={handleViewStory}>
          <Decagon color={color} imageData={image} />
        </TouchableOpacity>

        <View style={styles.iconposition}>
          <TouchableOpacity onPress={handleAddStory}>
            <Icon name={micon} color="yellow" size={40} />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.bio}>Bio </Text>
      </View>
      <View style={styles.footer}>
        <Footer width="380" height="100" viewBox="-20 0 400 100" />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalview}>
          <TouchableOpacity onPress={clickPhoto}>
            <Text style={styles.button}>Click From Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={pickPhoto}>
            <Text style={styles.button}>Pick From Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={removePhoto}>
            <Text style={styles.button}>Remove Picture</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.button}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={storyModal}
        onRequestClose={() => setStoryModal(false)}
        style={styles.modal}>
        <StoryView closeStory={handleCloseStory} />
      </Modal>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    top: '2%',
    marginTop: '2%',
    marginLeft: '4%',
    marginRight: '4%',
    justifyContent: 'space-between',
  },

  picposition: {
    flex: 15,

    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    fontSize: 28,
    textAlign: 'center',
  },
  bio: {
    fontSize: 20,
    textAlign: 'center',
  },
  modalview: {
    position: 'absolute',
    bottom: '2%',
    alignItems: 'center',
    left: '10%',
    right: '10%',
    width: '80%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 30,
  },
  button: {
    fontSize: 20,
    padding: 2,
    margin: 2,
    color: 'blue',
    alignItems: 'center',
  },
  iconposition: {
    bottom: '10%',
    left: '18%',
  },
  modal: {
    margin: 0,
  },
  footer: {
    flex: 2,
    alignItems: 'center',
    marginLeft: '3%',
    marginRight: '3%',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default Profile;
