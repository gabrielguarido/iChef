import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  subTitleContinueNoLogin: {
    fontSize: 20,
    fontFamily: 'Arial',
    color: '#FFFFFF',
    marginTop: 15,
  },
  submitCreateAccount: {
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
    borderTopWidth: 1,
  },
});

export default styles;
