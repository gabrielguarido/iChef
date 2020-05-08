import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DE3232'
  },
  containerTop: {
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Segoe UI, Arial',
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'Segoe UI, Arial',
    color: '#FFFFFF',
  },
  subTitleContinueNoLogin: {
    fontSize: 20,
    fontFamily: 'Segoe UI, Arial',
    color: '#FFFFFF',
    marginTop: 15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    marginBottom: 15,
    color: '#5B5B5B',
    fontSize: 18,
    borderRadius: 30,
    padding: 10,
    paddingLeft: 20,
  },
  submitLogin: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000000',
    shadowRadius: 1,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    elevation: 10,
    marginTop: 40,
    marginBottom: -40,
  },
  submitCreateAccount: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000000',
    shadowRadius: 1,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    elevation: 10,
  },
  submitText: {
    color: '#DE3232',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  containerBottom: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '20%',
    borderTopColor: '#5B5B5B',
    borderTopWidth: 1
  },
});

export default styles;
