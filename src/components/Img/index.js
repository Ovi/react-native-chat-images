import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import AsyncImage from '../AsyncImage';
import { trueTypeOf, getThumbnail } from '../../utils';
import styles from './styles';

const Img = props => {
  const { style: propsStyle, image, hideCaption } = props;
  const hasMoreData = trueTypeOf(image) === 'object';

  return (
    <View style={[styles.container, propsStyle]}>
      <AsyncImage source={hasMoreData ? getThumbnail(image) : image} />

      {hasMoreData && image.caption && !hideCaption && (
        <Text style={[styles.caption, image.captionStyle]}>
          {image.caption}
        </Text>
      )}

      {hasMoreData && image.overlay && (
        <View style={styles.overlay}>{image.overlay}</View>
      )}
    </View>
  );
};

Img.defaultProps = {
  hideCaption: false,
  image: {},
  style: {},
};

Img.propTypes = {
  hideCaption: PropTypes.bool,
  image: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.shape({
      caption: PropTypes.string,
      captionStyle: PropTypes.shape({}),
      overlay: PropTypes.element,
      thumbnail: PropTypes.string,
      url: PropTypes.string.isRequired,
    }).isRequired,
  ]),
  style: PropTypes.shape({}),
};

export default Img;
