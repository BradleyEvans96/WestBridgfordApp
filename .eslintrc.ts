module.exports = {
  root: true,
  extends: [ 
    '@react-native-community', 
    'airbnb-typescript', 
    'prettier'
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    }
  },
};