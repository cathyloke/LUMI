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
    borderRadius: 50,
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
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    fontFamily: 'Gantari-Regular',
    fontSize: 18,
    color: '#3E2723', // Dark Chocolate
  },

  title:{
    fontFamily: 'Gantari-Regular',
    fontSize: 28,
    textAlign: 'center',
    color: '#102C57',
    marginTop: 20,
    fontWeight: 'bold'
  },

  subtitle:{
    marginTop:10,
    marginBottom:30,
    color:'#000000',
    textAlign:'center'
  },

  box: {
    width: 100,
    height: 50,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
    borderRadius: 20,
  },

  selectedBox: {
      backgroundColor: '#102C57',
  },

  text: {
      color: '#000',
  },

  selectedText: {
    color: '#F8F0E5',
 },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 3,
  },

  comments:{
    marginTop:20,
    color:'#000000',
    textAlign: 'left',
    marginLeft:20,
  },

  inputs:{
    height: 150,
    margin: 14,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },

  subbutton: {
    backgroundColor: '#102C57',  
    paddingVertical: 10,
    paddingHorizontal: 30,  
    borderRadius: 20, 
    alignItems: 'center',
    alignSelf: 'center', 
    width: 200,
  },
});
