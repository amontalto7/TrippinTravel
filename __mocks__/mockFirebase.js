/* eslint-disable no-undef */
//import auth from '@react-native-firebase/auth';

jest.mock('@react-native-firebase/auth', () => {
  return () => ({
    auth: jest.fn(),
  });
});
