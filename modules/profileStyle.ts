import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7CCC8', // Latte Beige
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: '#EFEBE9', // Cappuccino Cream
    borderRadius: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontFamily: 'Gantari-Regular',
    fontSize: 18,
    color: '#3E2723', // Dark Chocolate
  },
  value: {
    fontFamily: 'Gantari-Regular',
    fontSize: 18,
    color: '#6D4C41', // Mocha
  },
  input: {
    fontFamily: 'Gantari-Regular',
    borderBottomWidth: 1,
    borderBottomColor: '#6D4C41', // Mocha
    fontSize: 18,
    color: '#3E2723', // Dark Chocolate
    width: '60%',
    textAlign: 'right',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#FFAB91', // Caramel
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontFamily: 'Gantari-Regular',
    fontSize: 18,
    color: '#3E2723', // Dark Chocolate
  },
  logoutButton: {
    backgroundColor: '#E57373', // Red accent for logout
  },
  optionsContainer: {
    width: '90%',
    marginTop: 20,
  },
  optionButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#EFEBE9', // Cappuccino Cream
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    fontFamily: 'Gantari-Regular',
    fontSize: 18,
    color: '#3E2723', // Dark Chocolate
  },
});
