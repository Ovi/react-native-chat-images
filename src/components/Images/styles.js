import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  extraStyle: {
    paddingRight: 5,
    textAlign: 'right',
  },
  flexBasisHalf: {
    flexBasis: '50%',
  },
  flexOne: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  fourImagesInnerView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageContainer: {
    borderRadius: 5,
    flex: 1,
    marginBottom: 1,
    marginTop: 1,
    padding: 2,
  },
  imagesCount: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 30,
  },
  moreImagesOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 5,
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 2,
  },
  moreImagesOverlayContainer: {
    height: '100%',
    position: 'relative',
    width: '100%',
  },
  moreThanFourImagesInnerView: {
    flex: 1,
    flexDirection: 'row',
    height: '50%',
  },
  titleStyle: {
    fontSize: 16,
    paddingLeft: 5,
  },
});

export default styles;
