import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    borderRadius: 5,
    width: '100%',
  },
  img: {
    borderRadius: 5,
    flex: 1,
    height: '100%',
    resizeMode: 'cover',
    width: '100%',
  },
  innerView: {
    backgroundColor: 'lightgray',
    borderRadius: 5,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  placeHolderImg: {
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
    height: '100%',
    padding: 20,
    resizeMode: 'contain',
    width: '100%',
  },
});

export default styles;
