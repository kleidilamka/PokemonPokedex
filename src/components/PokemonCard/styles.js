import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 100,
    margin: 10,
  },
  leftContainer: {
    flexGrow: 1,
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '90%',
  },
  rightContainer: {
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    width: 10,
    flexGrow: 2.5,
    justifyContent: 'center',
    backgroundColor: '#DD5E56',
  },
  text: {
    fontSize: 25,
    fontFamily: 'Iowan Old Style',
    marginHorizontal: 15,
    color: '#fff',
  },
});

export default styles;
