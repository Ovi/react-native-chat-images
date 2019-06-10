import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  caption: {
    color: 'black',
    fontSize: 15,
    paddingLeft: 4,
    paddingTop: 2,
  },
  container: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 1,
    position: 'relative',
  },
  overlay: {
    aspectRatio: 1,
    borderRadius: 5,
    left: 1,
    position: 'absolute',
    top: 1,
    width: '100%',
  },
});

export default styles;
