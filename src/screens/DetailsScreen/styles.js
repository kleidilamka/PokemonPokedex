import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  imageContainer: {
    height: Dimensions.get('window').height / 2,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleContainer: {
    borderWidth: 1,
    backgroundColor: '#DD5E56',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10,
  },
  titlesText: {
    fontSize: 20,
    fontFamily: 'Helvetica',
    color: 'white',
  },
  middleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Helvetica',
  },
  bottomContainer: {
    marginHorizontal: 5,
  },
});

export default styles;
