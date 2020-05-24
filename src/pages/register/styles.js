import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DE3232',
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
    fontFamily: 'Arial',
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'Arial',
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginBottom: 100,
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
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowRadius: 1,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.6,
    elevation: 10,
    marginTop: 40,
    marginBottom: -40,
  },
  submitText: {
    color: '#DE3232',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default styles;
