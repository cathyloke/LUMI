import { StyleSheet } from 'react-native';

const drawerStyles = StyleSheet.create({
  header: {
    flex: 0.15,
    backgroundColor: '#FFAD60',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
  username: {
    color: 'white',
    fontSize: 15,
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
    fontSize: 15,
  },
});

export default drawerStyles;
