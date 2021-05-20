module.exports = {
    root: true,
    extends: [
        '@react-native-community', 
        'airbnb-typescript', 
        'prettier',     
        'plugin:json/recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended'
    ],
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ["react"],
    rules: {
        "react/jsx-uses-vars": "error",
        "react/jsx-uses-react": "error"
	}
};
