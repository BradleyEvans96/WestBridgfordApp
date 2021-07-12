module.exports = {
    root: true,
    extends: [
        '@react-native-community', 
        'airbnb-typescript', 
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
        "import/no-dynamic-require": "off",
        "no-plusplus": "off",
        "global-require": "off",
        "unused-imports/no-unused-imports-ts": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-uses-react": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "@typescript-eslint/no-unused-vars": [
			"warn",
			{ 
                "vars": "all", 
                "varsIgnorePattern": "^_", 
                "args": "after-used", 
                "argsIgnorePattern": "^_" 
            }
		],
        "prettier/prettier": [
            "error",
            {
              "endOfLine": "auto"
            },
          ]
	},
    ignorePatterns: ['.eslintrc.js']
};
