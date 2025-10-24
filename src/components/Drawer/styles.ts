import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#161631'
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logoText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '700'
  },
  menu: {
    marginTop: 64
  },
  menuItem: {
    padding: 16,
  },
  activeMenuItem: {
    backgroundColor: '#412435',
    borderRadius: 8
  },
  menuLabel: {
    color: '#FFF',
    fontSize: 18
  },
  activeMenuLabel: {
    color: '#FE6C5C',
    fontWeight: '500'
  },
  divider: {
    height: 1,
    backgroundColor: '#33334D',
    marginVertical: 20
  },
  signOutButton: {
    padding: 16
  },
  signOutLabel: {
    color: '#fff',
    fontSize: 18
  }
})