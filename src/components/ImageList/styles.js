import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backBtnTouchableOpacity: {
    justifyContent: 'center',
    width: 35,
  },
  backBtnView: {
    flexDirection: 'row',
    height: 'auto',
    width: '100%',
  },
  caption: {
    color: 'lightgray',
    padding: 5,
    textAlign: 'center',
  },
  clickableImg: {
    marginBottom: 5,
    padding: 3,
  },
  container: {
    flex: 1,
  },
  modalView: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    padding: 5,
    paddingRight: 35,
  },
});

export default styles;
