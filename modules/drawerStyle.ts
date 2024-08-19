import { StyleSheet } from 'react-native';

const drawerStyles = StyleSheet.create({
  header: {
    flex: 0.2,
    backgroundColor: '#102C57',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#F8F0E5',
  },
  username: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Gantari-Regular',
    marginTop: 10,
  },
  drawerItems: {
    flex: 0.75,
  },
  logoutContainer: {
    flex: 0.1,
    paddingLeft: 15,
    paddingTop: 5,
    borderTopWidth: 1,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 14,
    fontFamily: 'Gantari-Regular',
  },
});

export default drawerStyles;
