import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Modal } from 'react-native';
import PropTypes from 'prop-types';

import Img from '../Img';
import ImageList from '../ImageList';
import styles from './styles';

class Images extends Component {
  state = {
    activeImageIndex: 0,
    modalVisible: false,
  };

  showImageListModal = (modalVisible, activeImageIndex) => {
    this.setState({ activeImageIndex, modalVisible });
  };

  lessThanFourImages = () => {
    const { images, backgroundColor, title, extra } = this.props;
    const { modalVisible } = this.state;

    const allImages = (
      <View style={[styles.imageContainer, { backgroundColor }]}>
        {title && <Text style={styles.titleStyle}>{title}</Text>}
        <View style={styles.flexRow}>
          {images.map((image, i) => (
            <TouchableOpacity
              key={`chat-image-${Math.random()}`}
              onPress={() => this.showImageListModal(!modalVisible, i)}
              activeOpacity={0.8}
              style={styles.flexOne}
            >
              <Img hideCaption={images.length !== 1} style={styles.flexOne} image={image} />
            </TouchableOpacity>
          ))}
        </View>
        {extra && <Text style={styles.extraStyle}>{extra}</Text>}
      </View>
    );

    return allImages;
  };

  fourImages = () => {
    const { images, backgroundColor, title, extra } = this.props;
    const { modalVisible } = this.state;

    return (
      <View style={[styles.imageContainer, { backgroundColor }]}>
        {title && <Text style={styles.titleStyle}>{title}</Text>}
        <View style={styles.fourImagesInnerView}>
          {images.map((image, i) => (
            <TouchableOpacity
              key={`chat-image-${Math.random()}`}
              onPress={() => this.showImageListModal(!modalVisible, i)}
              activeOpacity={0.8}
              style={styles.flexBasisHalf}
            >
              <Img hideCaption image={image} />
            </TouchableOpacity>
          ))}
        </View>
        {extra && <Text style={styles.extraStyle}>{extra}</Text>}
      </View>
    );
  };

  moreThanFourImages = () => {
    const { images, backgroundColor, title, extra } = this.props;
    const { modalVisible } = this.state;

    return (
      <View style={[styles.imageContainer, { backgroundColor }]}>
        {title && <Text style={styles.titleStyle}>{title}</Text>}
        <View style={styles.moreThanFourImagesInnerView}>
          <TouchableOpacity
            onPress={() => this.showImageListModal(!modalVisible, 0)}
            activeOpacity={0.8}
            style={styles.flexBasisHalf}
          >
            <Img hideCaption image={images[0]} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.showImageListModal(!modalVisible, 1)}
            activeOpacity={0.8}
            style={styles.flexBasisHalf}
          >
            <Img hideCaption image={images[1]} />
          </TouchableOpacity>
        </View>

        <View style={styles.moreThanFourImagesInnerView}>
          <TouchableOpacity
            onPress={() => this.showImageListModal(!modalVisible, 2)}
            activeOpacity={0.8}
            style={styles.flexBasisHalf}
          >
            <Img hideCaption image={images[2]} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.showImageListModal(!modalVisible, 3)}
            activeOpacity={0.8}
            style={styles.flexBasisHalf}
          >
            <View style={styles.moreImagesOverlayContainer}>
              <View style={styles.moreImagesOverlay}>
                <Text style={styles.imagesCount}>+{images.length - 3}</Text>
              </View>
              <Img hideCaption image={images[3]} />
            </View>
          </TouchableOpacity>
        </View>
        {extra && <Text style={styles.extraStyle}>{extra}</Text>}
      </View>
    );
  };

  render() {
    const { backgroundColor, images, saveOnLongPress, style, title, width } = this.props;
    const { activeImageIndex, modalVisible } = this.state;

    return (
      <ScrollView style={[{ backgroundColor: '#fff', flexGrow: 1 }, style, { width }]}>
        {images.length < 4 && this.lessThanFourImages()}
        {images.length === 4 && this.fourImages()}
        {images.length > 4 && this.moreThanFourImages()}
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            this.showImageListModal(!modalVisible, 0);
          }}
        >
          <ImageList
            saveOnLongPress={saveOnLongPress}
            index={activeImageIndex}
            backgroundColor={backgroundColor}
            setModalVisible={this.showImageListModal}
            images={images}
            title={title}
          />
        </Modal>
      </ScrollView>
    );
  }
}

Images.defaultProps = {
  backgroundColor: 'lightgreen',
  extra: undefined,
  saveOnLongPress: true,
  style: {},
  title: undefined,
  width: '100%',
};

Images.propTypes = {
  backgroundColor: PropTypes.string,
  extra: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.shape({
        caption: PropTypes.string,
        captionStyle: PropTypes.shape({}),
        overlay: PropTypes.element,
        thumbnail: PropTypes.string,
        url: PropTypes.string.isRequired,
      }).isRequired,
    ]),
  ).isRequired,
  saveOnLongPress: PropTypes.bool,
  style: PropTypes.shape({}),
  title: PropTypes.string,
  width: PropTypes.string,
};

export default Images;
