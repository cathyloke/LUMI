import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  font: {
    fontFamily: 'Gantari-Regular',
    color: 'blue',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.4,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'grey',
  },
  dot: {
    margin: 3,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    height: 80,
  },
  button: {
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
    height: 80,
    width: 100,
  },
  buttonText: {
    fontFamily: 'Gantari-Regular',
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
  },
  greetingContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
  },
  greetingText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  bestSellersContainer: {
    marginTop: 15,
    height: 190,
    padding: 10,
  },
  bestSellersTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  bestSellersScrollView: {
    paddingHorizontal: 10,
  },
  bestSellersItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  bestSellersImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  bestSellersText: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
  readyText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  }
});
