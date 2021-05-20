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
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        "react",
        "unused-imports"
    ],
    rules: {
        "react/jsx-props-no-spreading": "off",
        "react/display-name": "off",
        "react/prop-types": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "unused-imports/no-unused-imports-ts": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-uses-react": "error",
        "@typescript-eslint/no-unused-vars": [
			"warn",
			{ 
                "vars": "all", 
                "varsIgnorePattern": "^_", 
                "args": "after-used", 
                "argsIgnorePattern": "^_" 
            }
		]
	},
    ignorePatterns: ['.eslintrc.js']
};
