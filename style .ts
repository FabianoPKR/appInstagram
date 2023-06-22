
import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: Platform.OS === 'android' ? '0%' : '20%',
    marginBottom: Platform.OS === 'android' ? '0%' : '15%',
    height: 250,
    width: 250,
  },
  input: {
    width: "90%",
    height: 42,
    backgroundColor: '#f4f3f3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  forgotContainer: {
    width: '90%',
    alignItems: "flex-end",
  },
  forgotText: {
    color: '#399FFF',
  },
  loginButton: {
    marginTop: '5%',
    backgroundColor: '#399fff',
    width: '90%',
    height: 42,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 5,
    marginRight: "6%",
  },
  loginText: {
    color: '#fff',
    fontSize: 17,
  },
  facebookButton: {
    flexDirection: "row",
    alignItems: 'center',
    marginTop: "12%",
  },
  facebookText: {
    color: "#399fff",
    paddingLeft: 8,
    fontSize: 15,
  },
  divisor: {
    marginTop: '10%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linha: {
    width: '45%',
    flexDirection: 'row',
    height: 2,
    backgroundColor: '#efeded',
    borderRadius: 5,
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: '10%',
  },
  signUpText: {
    color: '#c4c4c4',
    paddingRight: 5,
  },
  signUpButton: {
    color: '#399fff',
    fontWeight: 'bold',
  },
  headPost: {
    height: 60,
    width: 50,
    marginHorizontal: 100,
  },
  post: {
    marginVertical: '1%',
  },
  fotoPerfil: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginLeft: 0,
    marginRight: 0,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  userInfo: {},
  postOptions: {
    flexDirection: 'row',
  },
  autor: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    flexDirection: 'row',
    marginRight: 220,
  },
  local: {
    fontSize: 12,
    color: '#666',
  },
  foto: {
    width: '100%',
    height: 400,
  },
  footer: {
    paddingHorizontal: 15,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  likes: {
    paddingTop: 0,
    fontWeight: "bold",
    fontSize: 12,
  },
  descricao: {
    color: "#000",
    lineHeight: 18,
  },
  hashtag: {
    color: "#002D5E"
  },
  leftActions: {
    flexDirection: 'row'
  },
  action: {
    marginRight: 8
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  feedContainer: {
    flex: 1,
    left: 0,
    paddingTop: 25
  },
  feedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
  },
  headerIcons: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingRight: 16,
  },
  iconLike: {
    width: 24,
    height: 24,
    marginLeft: 0,
    marginRight: 20
  },
  icon: {
    width: 30,
    height: 24,
    marginLeft: 5,
    marginRight: 0
  },
  footerIcons: {
    flexDirection: 'row',
    width: 30,
    height: 30,
    marginRight: 50,
    paddingHorizontal: 10,
    display: 'flex',
    paddingTop: 10
  },
  footerFeed: {
    flexDirection: 'row',
    height: 50,
    paddingTop: 5,
  }
});